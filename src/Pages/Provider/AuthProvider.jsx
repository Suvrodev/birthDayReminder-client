import React, { createContext, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
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
        return createUserWithEmailAndPassword(auth,email,password)
    }
    ///Registration By Email end

    ///Login By Email start
    const loginByEmail=(email,password)=>{
        return signInWithEmailAndPassword(auth,email,password)
    }
    ///Login By Email end

    const authInfo={
        user,
        loading,
        signInByGoogle,
        registerByEmail,
        loginByEmail,

    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;