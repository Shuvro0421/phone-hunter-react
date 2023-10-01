// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCGwf-IOgQxXH3X5F7VzIDRsZNoEufaMvU",
  authDomain: "phone-hunter-auth.firebaseapp.com",
  projectId: "phone-hunter-auth",
  storageBucket: "phone-hunter-auth.appspot.com",
  messagingSenderId: "453234542192",
  appId: "1:453234542192:web:4be193bf806bb1ba33d6b5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;