import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import Swal from 'sweetalert2';

const AddPeople = () => {
    const {user}=useContext(AuthContext)
    const email=user.email;
    console.log(email)
    const handleAddPeople=(event)=>{
        event.preventDefault();
        const form=event.target;

        const name=form.name.value;
        const dob=form.date.value;
        const email=form.email.value;
        const photo=form.photo.value;
        const phone=form.phone.value;
        const location=form.location.value;
        const desc=form.desc.value;
        const status="on"

        const people={
            Ref_Email: user.email,
            name,
            dob,
            email,
            photo,
            phone,
            location,
            desc,
            status
        }

        console.log(people)

        fetch('http://localhost:5000/addpeople',{
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(people)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            if(data.insertedId){
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Data Added Successfully',
                    showConfirmButton: false,
                    timer: 1500
                  })
            }
        })
    }
    return (
        <div>
        <h2 className="text-3xl text-center font-bold">Add People </h2>
        {
            user.email && <p className='text-center mt-5 font-bold text-orange-400'>Hey,  <span className='text-green-500 font-extrabold italic text-lg'>{user.email} </span></p>
        }
        <form onSubmit={handleAddPeople} className="p-10">
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
                      />
              </div>
          </div>
  
          <div className="mt-5 form-control">
          <label className="label">
              <span className="label-text">About his/her</span>
          </label>
  
              <textarea name="desc" 
               rows="10"
               className="w-full resize-none rounded-lg ps-5 pt-5">
              </textarea>
          </div>
              <div className="form-control mt-6">
                  <input className="bg-orange-700 btn btn-block" type="submit" value="Add" />
              </div>
        </form>
             
      </div>
    );
};

export default AddPeople;