# 🏸 Badminton Academy – Homepage

A React + Vite + Firebase homepage for a professional badminton coaching academy.

---

## 📁 Project Structure

```
badminton-app/
├── index.html
├── vite.config.js
├── package.json
└── src/
    ├── main.jsx                  ← React entry point
    ├── App.jsx / App.css
    ├── assets/
    │   ├── GirlAvatar.jsx        ← Inline SVG avatar (hardcoded)
    │   └── BoyAvatar.jsx         ← Inline SVG avatar (hardcoded)
    ├── components/
    │   ├── PlayerCard.jsx        ← Individual player card
    │   └── PlayerCard.css
    ├── firebase/
    │   ├── config.js             ← 🔑 Add YOUR Firebase credentials here
    │   └── players.js            ← Firestore fetch helper
    ├── hooks/
    │   └── usePlayers.js         ← Custom hook: loads players from Firestore
    └── pages/
        ├── Home.jsx              ← Main homepage
        └── Home.css
```

---

## 🚀 Getting Started

### 1. Install dependencies
```bash
npm install
```

### 2. Set up Firebase

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Create a new project (or use existing)
3. Add a **Web App** to your project
4. Copy the config object and paste it into `src/firebase/config.js`

```js
// src/firebase/config.js
const firebaseConfig = {
  apiKey:            "YOUR_API_KEY",
  authDomain:        "YOUR_PROJECT_ID.firebaseapp.com",
  projectId:         "YOUR_PROJECT_ID",
  storageBucket:     "YOUR_PROJECT_ID.appspot.com",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId:             "YOUR_APP_ID",
};
```

### 3. Set up Cloud Firestore

In the Firebase Console → Firestore Database → Create database

Create a collection called **`players`** with these fields per document:

| Field    | Type   | Example            |
|----------|--------|--------------------|
| name     | string | "Dinuthi"          |
| age      | number | 13                 |
| school   | string | "Royal College"    |
| level    | string | "Intermediate"     |
| gender   | string | "girl" or "boy"    |
| order    | number | 1 (display order)  |

### 4. Run the dev server
```bash
npm run dev
```

Open `http://localhost:5173` in your browser.

---

## ✅ What's Hardcoded
- Page title
- Coach name & affiliation
- Layout, colors, avatar illustrations
- Section labels (Age, School, Level)

## 🔥 What Comes from Firebase (Firestore)
- Player **name**
- Player **age**
- Player **school**
- Player **level**
- Player **gender** (determines pink vs blue row)
- Display **order**

---

## 📦 Tech Stack
- **React 18** + **Vite 5**
- **Firebase 10** (Firestore, Auth, Storage)
- **Lucide React** (Search icon)
- **CSS3** (custom properties, animations)
- **Google Fonts** – Playfair Display + Nunito
