// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "@firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCkkJguz8O2WLPcX2vWeVxxvStRWPHmc9o",
  authDomain: "testproject-58121.firebaseapp.com",
  projectId: "testproject-58121",
  storageBucket: "testproject-58121.firebasestorage.app",
  messagingSenderId: "584343431895",
  appId: "1:584343431895:web:2a0c0a69c740af46151e92",
  measurementId: "G-BRYV4B61DM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

//Initailize firebase database
export const db= getFirestore(app);


//Export servcies which i  want to use
export default app;