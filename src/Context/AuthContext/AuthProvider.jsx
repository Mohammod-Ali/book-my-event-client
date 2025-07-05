import { useEffect, useState } from "react";
import AuthContext from "./AuthContext";
import {  createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import auth from "../../Firebase/Firebase.init";




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
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;