import { GoogleAuthProvider, getAuth, signInWithPopup, onAuthStateChanged, signOut  } from "firebase/auth";
import { useEffect, useState } from "react";
import firebaseInitialization from "../components/Firebase/firebase.init";

firebaseInitialization();

// firebase authentication details here 
const useFirebase = () =>{

    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    //Sign in using Google
    const signInUsingGoogle = () =>{
       return signInWithPopup(auth, googleProvider)
        
    }

    // signOut Google
    const logOut = ()=>{
        setIsLoading(true)
        signOut(auth)
        .then(()=>{
            setUser({})
        })
        setIsLoading(false)
    }

    // Observe whether user auth state changed or not
    useEffect(()=>{
        onAuthStateChanged(auth, (user)=>{
            if(user){
                setUser(user);
            }
            setIsLoading(false)
        })
    }, [])

    return {user, signInUsingGoogle, logOut, isLoading }
}

export default useFirebase;