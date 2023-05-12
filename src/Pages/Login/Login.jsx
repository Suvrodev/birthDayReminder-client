import React, { useContext } from 'react';
import loginImage from '../../assets/loginImage.jpg'
import { Link } from 'react-router-dom';
import { FaGoogle } from "react-icons/fa";
import { AuthContext } from '../Provider/AuthProvider';

const Login = () => {
    const {signInByGoogle,loginByEmail}=useContext(AuthContext)
    const handleLogin=event=>{
       event.preventDefault();
       const form=event.target;
       const email=form.email.value;
       const password=form.password.value;
       console.log(email, password)

        loginByEmail(email,password)
       .then(result=>{
            const loggedUser=result.user;
            console.log(loggedUser)
       })
       .catch(error=>{
           console.log(error.message)
       })
    }
    const handleLoginGoogle=()=>{
        signInByGoogle()
        .then(result=>{
            const loggedUser=result.user;
            console.log(loggedUser)
        })
        .catch(error=>{
            console.log(error.message)
        })
    }
    return (
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row lg:gap-32 bg-orange-500">
          <div className="flex items-center justify-center w-1/2">
            <img className='rounded-3xl' src={loginImage} alt="" />
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
            <h1 className="text-3xl font-bold text-center">Login now!</h1>
  
             <form onSubmit={handleLogin}>
              <div className="form-control">
                  <label className="label">
                      <span className="label-text">Email</span>
                  </label>
                  <input
                      type="email"
                      placeholder="email"
                      className="input input-bordered"
                      name="email"
                  />
                  </div>
                  <div className="form-control">
                  <label className="label">
                      <span className="label-text">Password</span>
                  </label>
                  <input
                      type="password"
                      placeholder="password"
                      className="input input-bordered"
                      name="password"
                  />
                  <label className="label">
                      <a href="#" className="label-text-alt link link-hover">
                      Forgot password?
                      </a>
                  </label>
                  </div>
                  <div className="form-control mt-6">
                  <input type="submit" className="btn btn-primary" value="Login" />
                  </div>
             </form>
             <div className="flex items-center justify-center flex-col gap-5">
              <p className="font-bold">Or Sign up With</p>
              <button onClick={handleLoginGoogle} className="btn text-yellow-300"> <FaGoogle/> </button>
             </div>
             <p className="text-center my-4">New to Here? <Link to='/signup' className="font-bold text-orange-500">Sign Up</Link> </p>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Login;