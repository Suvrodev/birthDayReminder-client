import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { useParams } from 'react-router-dom';

const Update = () => {
    const {user}=useContext(AuthContext)

    const {id}=useParams()
    console.log(id)

    const [people,setPeople]=useState('')

    useEffect(()=>{
        fetch(`http://localhost:5000/peoples/${id}`)
        .then(res=>res.json())
        .then(data=>{
            setPeople(data)
        })
    },[])

    console.log(people)
    const {_id,name,dob,email,photo,phone,location,desc}=people;


    const handleUpdatePeople=(event)=>{

    }
    return (
        <div>
            <h2 className="text-3xl text-center font-bold">Add People </h2>
            {
                user.email && <p className='text-center mt-5 font-bold text-orange-400'>Hey,  <span className='text-green-500 font-extrabold italic text-lg'>{user.email} </span></p>
            }
            <div className='mt-10'>
                <img className='w-24 mx-auto rounded-full' src={photo} alt="" />
            </div>
            <form onSubmit={handleUpdatePeople} className="p-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="form-control">
                        <label className="label">
                        <span className="label-text">Name</span>
                        </label>
                        <input
                        type="text"
                        name="name"
                        placeholder="Name"
                        className="input input-bordered"
                        defaultValue={name}
                        />
                    </div>
                    <div className="form-control">
                        <label className="label">
                        <span className="label-text">Date of Birth</span>
                        </label>
                        <input
                        type="date"
                        name="date"
                        className="input input-bordered"
                        defaultValue={dob}
                        />
                </div>
                <div className="form-control">
                        <label className="label">
                        <span className="label-text">His/Her Email</span>
                        </label>
                        <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        className="input input-bordered"
                        defaultValue={email}
                        
                        />
                    </div>
                    <div className="form-control">
                        <label className="label">
                        <span className="label-text">His/her Photo Url</span>
                        </label>
                        <input
                        type="url"
                        name="photo"
                        className="input input-bordered"
                        defaultValue={photo}
                        />
                </div>
                <div className="form-control">
                        <label className="label">
                        <span className="label-text">Phone</span>
                        </label>
                        <input
                        type="number"
                        name="phone"
                        placeholder="Phone Number"
                        className="input input-bordered"
                        defaultValue={phone}
                        />
                    </div>
                    <div className="form-control">
                        <label className="label">
                        <span className="label-text">Location</span>
                        </label>
                        <input
                        type="text"
                        name="location"
                        placeholder="Location"
                        className="input input-bordered"
                        defaultValue={location}
                        />
                </div>
            </div>
    
            <div className="mt-5 form-control">
            <label className="label">
                <span className="label-text">About his/her</span>
            </label>
    
                <textarea name="desc" 
                defaultValue={desc}
                rows="10"
                className="w-full resize-none rounded-lg ps-5 pt-5">
                
                </textarea>
            </div>
                <div className="form-control mt-6">
                    <input className="bg-orange-700 btn btn-block" type="submit" value="Update" />
                </div>
            </form>
             
      </div>
    );
};

export default Update;