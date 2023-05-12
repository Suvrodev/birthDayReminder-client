import React, { useContext } from 'react';
import { AuthContext } from '../Pages/Provider/AuthProvider';

const PrivateRoute = ({children}) => {
    const {user,loading}=useContext(AuthContext)

    if(loading){
        return <progress className="progress w-56 bg-green-500"></progress>
    }

    if(user?.email){
        return children
    }
};

export default PrivateRoute;