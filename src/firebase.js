import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAtrp1aFdZnkUKSVTb87qQEdbvCx5IPYxA",
  authDomain: "ecomerce2021-8f80b.firebaseapp.com",
  projectId: "ecomerce2021-8f80b",
  storageBucket: "ecomerce2021-8f80b.appspot.com",
  messagingSenderId: "887306003903",
  appId: "1:887306003903:web:01f899abc93fe8b07fed0a",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();

export { auth };
