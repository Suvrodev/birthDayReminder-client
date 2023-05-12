import React, { useContext, useEffect, useState } from 'react';
import AllPeopleCard from '../AllPeople/AllPeopleCard';
import { AuthContext } from '../Provider/AuthProvider';

const People = () => {
    const [doData,setDoData]=useState(false)
    const {user}=useContext(AuthContext)
    const mail=user.email;
    console.log(mail)
    // if(mail){
    //     setDoData(!doData)
    // }

    const [peoples,setPeoples]=useState([])
    useEffect(()=>{
        fetch(`http://localhost:5000/mypeoples?Ref_Email=${mail}`)
        .then(res=>res.json())
        .then(data=>{
           setPeoples(data)
        })
    },[window.location.reload])
    console.log(peoples)
    return (
        <div>
          <h2 className='text-center mb-20 font-bold text-green-500'>All People: {peoples.length} </h2>
          <div className='grid lg:grid-cols-3 md:grid-cols-2'>
            {
                peoples.map(people=> <AllPeopleCard
                key={people._id}
                people={people}
                ></AllPeopleCard> )
            }
          </div>
        </div>
    );
};

export default People;