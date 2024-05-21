import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyA-P1elGjqBCwIENiCIoaYzs5i-2cKQOz8",
  authDomain: "bd3-gui.firebaseapp.com",
  projectId: "bd3-gui",
  storageBucket: "bd3-gui.appspot.com",
  messagingSenderId: "236496671949",
  appId: "1:236496671949:web:492818b4554415a63b8584"
};

window.fbApp = initializeApp(firebaseConfig);
window.fbDb = getFirestore(fbApp);