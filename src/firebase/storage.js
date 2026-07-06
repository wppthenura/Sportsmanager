import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, updateDoc } from "firebase/firestore";
import { storage, db } from "./config";

/**
 * Upload an image to Firebase Storage and save the URL to Firestore.
 *
 * @param {File}   file        - The image file from input
 * @param {string} firestoreId - The Firestore document ID of the player
 * @param {string} field       - "photoURL" (homepage) or "profilePhotoURL" (profile page)
 * @param {function} onProgress - Callback with upload % (0-100)
 * @returns {string} The download URL
 */
export async function uploadPlayerImage(file, firestoreId, field, onProgress) {
  // Validate file type
  if (!file.type.startsWith("image/")) {
    throw new Error("Please select a valid image file.");
  }

  // Validate file size (max 5MB)
  if (file.size > 5 * 1024 * 1024) {
    throw new Error("Image must be smaller than 5MB.");
  }

  // Create storage path: players/FIRESTOREID/field_timestamp.ext
  const ext       = file.name.split(".").pop();
  const path      = `players/${firestoreId}/${field}_${Date.now()}.${ext}`;
  const storageRef = ref(storage, path);

  // Upload with progress tracking
  return new Promise((resolve, reject) => {
    const task = uploadBytesResumable(storageRef, file);

    task.on(
      "state_changed",
      (snapshot) => {
        const pct = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
        if (onProgress) onProgress(pct);
      },
      (error) => reject(error),
      async () => {
        try {
          const url = await getDownloadURL(task.snapshot.ref);
          // Save URL to Firestore
          await updateDoc(doc(db, "players", firestoreId), { [field]: url });
          resolve(url);
        } catch (err) {
          reject(err);
        }
      }
    );
  });
}

/**
 * Upload coach profile or cover photo.
 * @param {File}   file     - Image file
 * @param {string} field    - "profilePhotoURL" or "coverPhotoURL"
 * @param {function} onProgress
 */
export async function uploadCoachImage(file, field, onProgress) {
  if (!file.type.startsWith("image/")) throw new Error("Please select a valid image file.");
  if (file.size > 5 * 1024 * 1024)    throw new Error("Image must be smaller than 5MB.");

  const ext        = file.name.split(".").pop();
  const path       = `coach/${field}_${Date.now()}.${ext}`;
  const storageRef = ref(storage, path);

  return new Promise((resolve, reject) => {
    const task = uploadBytesResumable(storageRef, file);

    task.on(
      "state_changed",
      (snapshot) => {
        const pct = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
        if (onProgress) onProgress(pct);
      },
      (error) => reject(error),
      async () => {
        try {
          const url = await getDownloadURL(task.snapshot.ref);
          await updateDoc(doc(db, "academy", "coach_profile"), { [field]: url });
          resolve(url);
        } catch (err) {
          reject(err);
        }
      }
    );
  });
}