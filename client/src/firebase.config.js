// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDdqlcqnXN8zYRRuO-2QytPatyuAICZO_4",
  authDomain: "bazaar-iii.firebaseapp.com",
  projectId: "bazaar-iii",
  storageBucket: "bazaar-iii.appspot.com",
  messagingSenderId: "500735503086",
  appId: "1:500735503086:web:f04f805398b634604ae1ff",
  measurementId: "G-VR1CCEXWJE"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app); 