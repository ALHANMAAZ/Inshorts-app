// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB5GsAWDt9jLm2vl63_RnVRyysMNaEjfA8",
  authDomain: "inshorts-app-3102f.firebaseapp.com",
  projectId: "inshorts-app-3102f",
  storageBucket: "inshorts-app-3102f.appspot.com",
  messagingSenderId: "80827133370",
  appId: "1:80827133370:web:7d0e1522e94990ebf88183",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const fireDB = getFirestore(app);
const auth = getAuth(app);
export { fireDB, auth };
