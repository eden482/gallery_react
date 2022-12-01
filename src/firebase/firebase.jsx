// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


import { getStorage } from "firebase/storage"
import { getFirestore,  serverTimestamp} from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBxudCW4eQMXy9yC-_GCfHev7-qggElMY4",
  authDomain: "photo-gallery-e2a89.firebaseapp.com",
  projectId: "photo-gallery-e2a89",
  storageBucket: "photo-gallery-e2a89.appspot.com",
  messagingSenderId: "258881038270",
  appId: "1:258881038270:web:77491f56acee1d302d7bef"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


const projectStorage = getStorage(app);
const projectFirestore = getFirestore(app);
const timeStamp = serverTimestamp();



export {projectStorage,projectFirestore, timeStamp };