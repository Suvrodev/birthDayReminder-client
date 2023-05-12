import React, { useContext } from 'react';
import regImage from '../../assets/regImage.jpg'
import { Link } from 'react-router-dom';
import AuthProvider, { AuthContext } from '../Provider/AuthProvider';

const SignUp = () => {

    const {registerByEmail}=useContext(AuthContext)

    const handleSignUp=(event)=>{
        event.preventDefault();
        const form=event.target;
        const name=form.name.value;
        const photo=form.photo.value;
        const email=form.email.value;
        const password=form.password.value;

        console.log(name,"\n",photo,"\n",email,"\n",password)

        registerByEmail(email,password)
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
        <div className="hero-content flex-col lg:flex-row lg:gap-32 bg-orange-500 ">
          <div className="flex items-center justify-center w-1/2">
            <img className='rounded-full' src={regImage} alt="" />
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
            <h1 className="text-3xl font-bold text-center">Sign Up</h1>
  
             <form onSubmit={handleSignUp}>
              <div className="form-control">
                  <label className="label">
                      <span className="label-text">Name</span>
                  </label>
                  <input
                      type="text"
                      placeholder="Name"
                      className="input input-bordered"
                      name="name"
                  />
                  </div>

              <div className="form-control">
                  <label className="label">
                      <span className="label-text">Photo url</span>
                  </label>
                  <input
                      type="url"
                      placeholder="Photo url"
                      className="input input-bordered"
                      name="photo"
                  />
                  </div>

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
                  <input type="submit" className="btn btn-primary" value="Sign up" />
                  </div>
             </form>
             <p className="text-center my-4">Already Have an Account <Link to='/login' className="font-bold text-orange-500">Login</Link> </p>
            </div>
          </div>
        </div>
      </div>
    );
};

export default SignUp;