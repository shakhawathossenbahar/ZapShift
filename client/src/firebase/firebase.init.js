// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_apiKey,
  authDomain: import.meta.env.VITE_authDomain,
  projectId: import.meta.env.VITE_projectId,
  storageBucket: import.meta.env.VITE_storageBucket,
  messagingSenderId: import.meta.env.VITE_messagingSenderId,
  appId: import.meta.env.VITE_appId,
};

// const firebaseConfig = {
//   apiKey: "AIzaSyAEjpG-26mnYQoo4jn-85VXynOHfLWXXx4",
//   authDomain: "zap-shift-d3137.firebaseapp.com",
//   projectId: "zap-shift-d3137",
//   storageBucket: "zap-shift-d3137.firebasestorage.app",
//   messagingSenderId: "500210459638",
//   appId: "1:500210459638:web:c88644ee0bc7cbeaa7ddd7"
// };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);