import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";

//firebase initialization
const firebaseInitialization = ()=>{
    initializeApp(firebaseConfig);
}

export default firebaseInitialization;