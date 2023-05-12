import React, { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import { Link } from 'react-router-dom';
import navLogo from '../../../assets/logo.svg'

const NavBar = () => {
    const {user,doLogout}=useContext(AuthContext)


    const handleLogout=()=>{
       doLogout()
       .then(()=>{})
       .catch(error=>{
        console.log(error.message)
       })
    }

    const navItems=<div className='lg:flex items-center justify-center'>
    <li><Link to='/'>Home</Link></li>
    {
     user ?
     <>
       <li> <Link to={'/people'}>People</Link> </li>
       <li> <Link to={'/birthday'}>Birthday</Link> </li>
       <li> <Link to={'/add'}>Add</Link> </li>
       {
         user.photoURL && 
         <img className='w-10 h-10 rounded-full' src={user.photoURL}></img>
       }
       {
         user.displayName && 
         <li className='font-bold lg:ms-5'> {user.displayName} </li>
       }
       <li> <button onClick={handleLogout} className='btn lg:ms-5'>Logout</button> </li>
     </>
     :
     <li><Link to='/login'>Login</Link></li>
    }
  
   </div>

    return (
         <div className="navbar bg-base-100 h-28 mb-4">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 ">
             {
                navItems
                
             }
           
            </ul>
          </div>
          <Link className="btn btn-ghost normal-case text-xl" to='/'> <img src={navLogo} /> </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
             {navItems}
          </ul>
        </div>
        <div className="navbar-end">
          <Link to='/adminpeople'><button className="btn btn-outline btn-warning">Web Admin Activity</button></Link>
        </div>
      </div>
    );
};

export default NavBar;