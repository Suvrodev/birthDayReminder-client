import React, { createContext, useState } from 'react';
import { getAuth } from "firebase/auth";
import app from '../../Firebase/firebase.config';

export const AuthContext=createContext();
const auth=getAuth(app)

const AuthProvider = ({children}) => {
    const [user,setUser]=useState("");
    const [loading,setLoading]=useState(true);

    const authInfo={}
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;