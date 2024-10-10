// Import the functions you need from the SDKs you need
import { initializeApp, getApps} from "firebase/app";
//importing the authentication package
import {initializeAuth,getReactNativePersistence,getAuth} from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAN2a18vkAOGPEqClytoxFH97cQHv1P_rU",
  authDomain: "react-native-auth-demo-cfbf3.firebaseapp.com",
  projectId: "react-native-auth-demo-cfbf3",
  storageBucket: "react-native-auth-demo-cfbf3.appspot.com",
  messagingSenderId: "1089921828390",
  appId: "1:1089921828390:web:44374cc5ae8c60fdf288e7"
};
//creating a authentica
// Initialize Firebase
const app = initializeApp(firebaseConfig);

   const auth=getAuth();

export {auth};
