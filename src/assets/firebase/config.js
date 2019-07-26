//Firebase
const firebase = require("firebase");
require("firebase/firestore");

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyALxRMGbywhl6SvxH-A6PO8NSIe0rQJp3U",
  authDomain: "myagenda-7f541.firebaseapp.com",
  databaseURL: "https://myagenda-7f541.firebaseio.com",
  projectId: "myagenda-7f541",
  storageBucket: "",
  messagingSenderId: "1091494386090",
  appId: "1:1091494386090:web:d9e65a2bcfc24f3f"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();
