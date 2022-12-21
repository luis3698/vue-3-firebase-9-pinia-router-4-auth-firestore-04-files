import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyDdhcr8tqJHtjSXamEpK-is-A0YIGCNmH0",
    authDomain: "vue-pinia-vite-firebase.firebaseapp.com",
    projectId: "vue-pinia-vite-firebase",
    storageBucket: "vue-pinia-vite-firebase.appspot.com",
    messagingSenderId: "1095437044428",
    appId: "1:1095437044428:web:708001f64347f949e9d069"
};

const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore();
const storage = getStorage(firebaseApp);

export { auth, db, storage };
