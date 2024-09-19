// import { Account, Client, ID } from "appwrite";
// import conf from "../Conf/Conf";

// import { Client } from "appwrite";

// export class AuthService {
//   client = new Client();
//   account;

//   constructor() {
//     this.client
//       .setEndpoint("https://cloud.appwrite.io/v1") // Appwrite endpoint
//       .setProject("66e585210032f16f3251"); // Your project ID
//     this.account = new Account(this.client);
//   }

//   // Create a new account
//   async createAccount({ email, password }) {
//     try {
//       const userAccount = await this.account.create(
//         ID.unique(), // Create unique ID
//         email,
//         password
//       );
//       // If account is created, log the user in
//       return this.login({ email, password });
//     } catch (error) {
//       throw error; // Handle error
//     }
//   }

//   // Log in existing user
//   async login({ email, password }) {
//     try {
//       // Correct method for creating a session
//       return await this.account.createSession(email, password);
//     } catch (error) {
//       throw error; // Handle error
//     }
//   }

//   // Fetch the currently logged-in user's details
//   async getCurrentUser() {
//     try {
//       return await this.account.get(); // Get the current user details
//     } catch (error) {
//       throw error; // Handle error
//     }
//   }
// }

// import { Client, Account } from "appwrite";
// import conf from "../Conf/Conf";

// const client = new Client();

// // Ensure the environment variables are passed correctly
// client.setEndpoint(conf.appWriteUrl).setProject(conf.appWriteProjectID);

// // Log the URL and project ID to verify they're correct
// console.log(conf.appWriteUrl, conf.appWriteProjectID);

// export const account = new Account(client);

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
