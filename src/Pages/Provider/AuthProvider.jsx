import React, { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../../Firebase/firebase.config';

export const AuthContext=createContext();
const auth=getAuth(app)

const AuthProvider = ({children}) => {
    const [user,setUser]=useState("");
    const [loading,setLoading]=useState(true);


    ///Google Login Start
    const googleProvider=new GoogleAuthProvider();
    const signInByGoogle=()=>{
        return signInWithPopup(auth,googleProvider);
    }
    ///Google Login End


    ///Registration By Email start
    const registerByEmail=(email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }
    ///Registration By Email end

    ///Login By Email start
    const loginByEmail=(email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }
    ///Login By Email end


    ///Logout Start
    const doLogout=()=>{
        setLoading(true)
        return signOut(auth)
    }
    ///Logout End


    ///Check Current User start
    useEffect(()=>{
       const unSubscribe = onAuthStateChanged(auth, (currentUser)=>{
            setUser(currentUser)
            setLoading(false)
           // console.log('Current User: ',currentUser)
        })
        return ()=>{
            return unSubscribe();
        }
    },[])
    ///Check Current User end

    const authInfo={
        user,
        loading,
        signInByGoogle,
        registerByEmail,
        loginByEmail,
        doLogout,

    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;