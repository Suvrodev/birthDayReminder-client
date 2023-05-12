import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Pages/SharedPages/Header/Header';

const Main = () => {
    return (
        <div>
            <Header></Header>
             {/* This is Main */}
            <Outlet></Outlet>
        </div>
    );
};

export default Main;