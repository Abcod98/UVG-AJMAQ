
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyCXGnAjcbpigTdF0Gk6kpO7rRriwSp0cfc",
  authDomain: "ajmaq-4cea4.firebaseapp.com",
  projectId: "ajmaq-4cea4",
  storageBucket: "ajmaq-4cea4.appspot.com",
  messagingSenderId: "77942995494",
  appId: "1:77942995494:web:7587f6066e7496cfdec4e7"
};


export const app = initializeApp(firebaseConfig);
export  const auth = getAuth(app);