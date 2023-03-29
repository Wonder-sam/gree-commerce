// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore} from 'firebase/firestore';
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAKSzYsFnPmC1mb1a9eR_PIPE0sGfM99vk",
  authDomain: "ecommerce-f1969.firebaseapp.com",
  projectId: "ecommerce-f1969",
  storageBucket: "ecommerce-f1969.appspot.com",
  messagingSenderId: "351827066319",
  appId: "1:351827066319:web:32056569172c1ccf5626ba",
  measurementId: "G-FQCQ6R8TKJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
const analytics = getAnalytics(app);
