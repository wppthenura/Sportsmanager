// src/firebase/playerAuth.js
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  updateProfile,
  deleteUser,
  updatePassword,
  onAuthStateChanged,
  browserLocalPersistence,
  setPersistence,
  EmailAuthProvider,
  reauthenticateWithCredential,
} from "firebase/auth";

import {
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  where,
  limit,
  runTransaction,
  serverTimestamp,
} from "firebase/firestore";

import { auth, db } from "./config";

const googleProvider = new GoogleAuthProvider();

export function normalizePlayerId(value) {
  return String(value || "").trim().toUpperCase();
}

function usernameDocId(playerId) {
  return normalizePlayerId(playerId).toLowerCase();
}

function normalizeCode(value) {
  return String(value || "").trim().toUpperCase();
}

function cleanEmail(value) {
  return String(value || "").trim().toLowerCase();
}

function friendlyFirebaseError(error) {
  const code = error?.code || "";
  const message = error?.message || "";

  if (code.includes("email-already-in-use")) {
    return "This email is already used. Please log in instead, or use another email.";
  }

  if (code.includes("invalid-email")) {
    return "Please enter a valid email address.";
  }

  if (code.includes("weak-password")) {
    return "Password is too weak. Please use at least 6 characters.";
  }

  if (code.includes("popup-closed-by-user")) {
    return "Google sign-in was closed before finishing.";
  }

  if (code.includes("network-request-failed")) {
    return "Network error. Please check your internet connection.";
  }

  if (message) return message.replace("Firebase: ", "");

  return "Something went wrong. Please try again.";
}

export async function findPlayerByPlayerId(playerId) {
  const normalizedId = normalizePlayerId(playerId);

  if (!normalizedId) {
    throw new Error("Please enter your Player ID.");
  }

  const q = query(
    collection(db, "players"),
    where("playerId", "==", normalizedId),
    limit(1)
  );

  const snap = await getDocs(q);

  if (snap.empty) {
    throw new Error(
      "This Player ID is not registered yet. Please contact Mr. Pulindu."
    );
  }

  const playerDoc = snap.docs[0];

  return {
    playerDocId: playerDoc.id,
    player: playerDoc.data(),
  };
}

export async function verifyPlayerClaim(playerId, activationCode) {
  const normalizedId = normalizePlayerId(playerId);
  const normalizedActivation = normalizeCode(activationCode);

  if (!normalizedId) {
    throw new Error("Please enter your Player ID.");
  }

  if (!normalizedActivation) {
    throw new Error("Please enter the activation code sent by Coach Pulindu.");
  }

  const { playerDocId, player } = await findPlayerByPlayerId(normalizedId);

  if (player.accountStatus === "claimed" || player.authUid) {
    throw new Error(
      "This player account has already been claimed. Please log in or contact Coach Pulindu."
    );
  }

  if (player.activationCodeUsed === true) {
    throw new Error(
      "This activation code has already been used. Please contact Coach Pulindu."
    );
  }

  if (!player.activationCode) {
    throw new Error(
      "This player profile does not have an activation code yet. Please contact Coach Pulindu."
    );
  }

  if (normalizeCode(player.activationCode) !== normalizedActivation) {
    throw new Error(
      "Invalid activation code. Please check the code sent by Coach Pulindu."
    );
  }

  return {
    playerDocId,
    playerId: normalizedId,
    player,
  };
}

async function getPlayerAccount(uid) {
  if (!uid) return null;

  const accountSnap = await getDoc(doc(db, "player_accounts", uid));

  if (!accountSnap.exists()) return null;

  return {
    id: accountSnap.id,
    ...accountSnap.data(),
  };
}

async function commitPlayerClaim({
  playerDocId,
  playerId,
  activationCode,
  user,
  provider,
}) {
  const normalizedId = normalizePlayerId(playerId);
  const normalizedActivation = normalizeCode(activationCode);
  const now = new Date().toISOString();

  const playerRef = doc(db, "players", playerDocId);
  const accountRef = doc(db, "player_accounts", user.uid);
  const usernameRef = doc(db, "player_usernames", usernameDocId(normalizedId));

  await runTransaction(db, async (transaction) => {
    const playerSnap = await transaction.get(playerRef);
    const accountSnap = await transaction.get(accountRef);
    const usernameSnap = await transaction.get(usernameRef);

    if (!playerSnap.exists()) {
      throw new Error(
        "This Player ID is not registered yet. Please contact Mr. Pulindu."
      );
    }

    const player = playerSnap.data();

    if (
      player.accountStatus === "claimed" ||
      player.activationCodeUsed === true ||
      player.authUid
    ) {
      if (player.authUid === user.uid) return;

      throw new Error(
        "This player account has already been claimed. Please log in or contact Coach Pulindu."
      );
    }

    if (!player.activationCode) {
      throw new Error(
        "This player profile does not have an activation code yet. Please contact Coach Pulindu."
      );
    }

    if (normalizeCode(player.activationCode) !== normalizedActivation) {
      throw new Error(
        "Invalid activation code. Please check the code sent by Coach Pulindu."
      );
    }

    if (accountSnap.exists()) {
      const existingAccount = accountSnap.data();

      if (existingAccount.playerDocId !== playerDocId) {
        throw new Error(
          "This login account is already linked to another player profile. Please contact Coach Pulindu."
        );
      }
    }

    if (usernameSnap.exists()) {
      const usernameData = usernameSnap.data();

      if (usernameData.uid && usernameData.uid !== user.uid) {
        throw new Error(
          "This Player ID is already linked to another login account."
        );
      }
    }

    transaction.update(playerRef, {
      accountStatus: "claimed",
      authUid: user.uid,
      linkedEmail: user.email || "",
      linkedProvider: provider,
      activationCodeUsed: true,
      activationCodeUsedAt: now,
      claimedAt: now,
      mustChangePassword: false,
    });

    transaction.set(
      accountRef,
      {
        uid: user.uid,
        role: "player",
        playerDocId,
        playerId: normalizedId,
        email: user.email || "",
        provider,
        active: true,
        mustChangePassword: false,
        createdAt: serverTimestamp(),
        updatedAt: serverTimestamp(),
      },
      { merge: true }
    );

    transaction.set(
      usernameRef,
      {
        username: normalizedId,
        email: user.email || "",
        uid: user.uid,
        playerDocId,
        active: true,
        provider,
        updatedAt: serverTimestamp(),
      },
      { merge: true }
    );
  });

  return getPlayerAccount(user.uid);
}

export async function claimPlayerWithEmail({
  playerId,
  activationCode,
  email,
  password,
}) {
  const normalizedId = normalizePlayerId(playerId);
  const cleanedEmail = cleanEmail(email);

  try {
    const claim = await verifyPlayerClaim(normalizedId, activationCode);

    const credential = await createUserWithEmailAndPassword(
      auth,
      cleanedEmail,
      password
    );

    if (claim.player?.name) {
      await updateProfile(credential.user, {
        displayName: claim.player.name,
      });
    }

    return await commitPlayerClaim({
      playerDocId: claim.playerDocId,
      playerId: normalizedId,
      activationCode,
      user: credential.user,
      provider: "password",
    });
  } catch (error) {
    const currentUser = auth.currentUser;

    if (
      currentUser &&
      error?.message &&
      !error.message.includes("already been claimed")
    ) {
      try {
        await deleteUser(currentUser);
      } catch {
        // If delete fails, sign out to avoid leaving the user inside the app.
        await signOut(auth);
      }
    }

    throw new Error(friendlyFirebaseError(error));
  }
}

export async function claimPlayerWithGoogle({ playerId, activationCode }) {
  const normalizedId = normalizePlayerId(playerId);

  try {
    const claim = await verifyPlayerClaim(normalizedId, activationCode);

    const credential = await signInWithPopup(auth, googleProvider);

    return await commitPlayerClaim({
      playerDocId: claim.playerDocId,
      playerId: normalizedId,
      activationCode,
      user: credential.user,
      provider: "google",
    });
  } catch (error) {
    throw new Error(friendlyFirebaseError(error));
  }
}

export async function loginPlayer(username, password) {
  const normalizedId = normalizePlayerId(username);

  if (!normalizedId) {
    throw new Error("Please enter your Player ID.");
  }

  try {
    const usernameSnap = await getDoc(
      doc(db, "player_usernames", usernameDocId(normalizedId))
    );

    if (!usernameSnap.exists()) {
      throw new Error("Incorrect Player ID or password. Please try again.");
    }

    const usernameData = usernameSnap.data();

    if (!usernameData.active) {
      throw new Error(
        "This player account is not active. Please contact Coach Pulindu."
      );
    }

    if (!usernameData.email) {
      throw new Error(
        "This Player ID is not linked to an email yet. Please claim your account first."
      );
    }

    const credential = await signInWithEmailAndPassword(
      auth,
      usernameData.email,
      password
    );

    if (credential.user.uid !== usernameData.uid) {
      await signOut(auth);
      throw new Error("Incorrect Player ID or password. Please try again.");
    }

    const account = await getPlayerAccount(credential.user.uid);

    if (!account || account.active === false) {
      await signOut(auth);
      throw new Error(
        "This account is not connected to a player profile. Please contact Coach Pulindu."
      );
    }

    return account;
  } catch (error) {
    throw new Error(friendlyFirebaseError(error));
  }
}

export async function loginPlayerWithGoogle() {
  try {
    const credential = await signInWithPopup(auth, googleProvider);
    const account = await getPlayerAccount(credential.user.uid);

    if (!account || account.active === false) {
      await signOut(auth);
      throw new Error(
        "This Google account is not linked to a player profile yet. Please claim your player account first."
      );
    }

    return account;
  } catch (error) {
    throw new Error(friendlyFirebaseError(error));
  }
}

export async function changeCurrentPlayerPassword(newPassword) {
  if (!auth.currentUser) {
    throw new Error("You must be logged in to change your password.");
  }

  await updatePassword(auth.currentUser, newPassword);
}

export async function getLinkedPlayer(userOrUid) {
  const uid =
    typeof userOrUid === "string"
      ? userOrUid
      : userOrUid?.uid;

  if (!uid) return null;

  const accountSnap = await getDoc(doc(db, "player_accounts", uid));

  if (!accountSnap.exists()) {
    return null;
  }

  const account = accountSnap.data();

  if (!account.active) {
    return null;
  }

  let player = null;

  if (account.playerDocId) {
    const playerSnap = await getDoc(doc(db, "players", account.playerDocId));

    if (playerSnap.exists()) {
      player = {
        id: playerSnap.id,
        ...playerSnap.data(),
      };
    }
  }

  return {
    uid,
    authUid: uid,

    // Important for your current PlayerDashboard logic
    firestorePlayerId: account.playerDocId,

    playerDocId: account.playerDocId,
    playerId: account.playerId,
    email: account.email,
    role: account.role || "player",
    provider: account.provider || "",
    active: account.active !== false,
    mustChangePassword: account.mustChangePassword === true,

    player,
  };
}

  export function onPlayerAuthChange(callback) {
  return onAuthStateChanged(auth, callback);
}


export async function logoutPlayer() {
  await signOut(auth);
}

// Backward-compatible name, in case other old files still import signUpPlayer.
export async function signUpPlayer(playerId, email, password, activationCode) {
  return claimPlayerWithEmail({
    playerId,
    email,
    password,
    activationCode,
  });
}

export async function keepUserLoggedIn() {
  await setPersistence(auth, browserLocalPersistence);
}

export async function verifyCurrentUserPassword(password) {
  const user = auth.currentUser;

  if (!user) {
    throw new Error("You must be logged in.");
  }

  if (!password) {
    throw new Error("Please enter your password.");
  }

  const providerIds = user.providerData.map((p) => p.providerId);

  if (providerIds.includes("google.com") && !providerIds.includes("password")) {
    throw new Error("This account uses Google login. Please log out and log in again with Google to confirm sensitive changes.");
  }

  const credential = EmailAuthProvider.credential(user.email, password);
  await reauthenticateWithCredential(user, credential);

  return true;
}