import { useEffect, useState } from "react";
import AuthContext from "./AuthContext";
import {  createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import auth from "../../Firebase/Firebase.init";


const googleProvider = new GoogleAuthProvider()


const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)


    // create user with email and password
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // sign in user with email and password
    const signInUser = (email, password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    //sign in with google
    const signInWithGoogle = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }

    // sign out the user
    const signOutUser = () => {
        setLoading(true)
        return signOut(auth)
    }

     const updateUserProfile=(name, photo)=> {
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photo,
        })
    }


    // observer for the user
    useEffect( () => {
    const unSubscribe = onAuthStateChanged(auth, currentUser =>{
        setUser(currentUser)
        console.log('state captured', currentUser)
        setLoading(false)

    })
    return() => {
        unSubscribe()
    }
    },[])


    const authInfo = {
        user, 
        loading,
        createUser,
        signInUser,
        signOutUser,
        signInWithGoogle,
        updateUserProfile,
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;