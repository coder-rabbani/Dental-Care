import { GoogleAuthProvider, getAuth, signInWithPopup, onAuthStateChanged, signOut  } from "firebase/auth";
import { useEffect, useState } from "react";
import firebaseInitialization from "../components/Firebase/firebase.init";

firebaseInitialization();

const useFirebase = () =>{

    const [user, setUser] = useState({});

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    //Sign in using Google
    const signInUsingGoogle = () =>{
       return signInWithPopup(auth, googleProvider)
        
    }

    // signOut Google
    const logOut = ()=>{
        signOut(auth)
        .then(()=>{
            setUser({})
        })
    }

    // Observe whether user auth state changed or not
    useEffect(()=>{
        onAuthStateChanged(auth, (user)=>{
            if(user){
                setUser(user);
            }
        })
    }, [])

    return {user, signInUsingGoogle, logOut }
}

export default useFirebase;