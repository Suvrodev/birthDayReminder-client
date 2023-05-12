import React, { createContext, useState } from 'react';
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
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

    const authInfo={
        user,
        loading,
        signInByGoogle,

    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;