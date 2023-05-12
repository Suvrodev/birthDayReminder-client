import React, { useEffect, useState } from 'react';
import AllPeopleCard from './AllPeopleCard';

const AllPeople = () => {
    const [peoples,setPeoples]=useState([])

    useEffect(()=>{
        fetch('http://localhost:5000/peoples')
        .then(res=>res.json())
        .then(data=>setPeoples(data))
    },[])

   // console.log(peoples)
    return (
        <div>
            <h2 className='text-center mb-20 font-bold text-green-500'>All People: {peoples.length} </h2>
           {/* <AllPeopleCard></AllPeopleCard> */}
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

export default AllPeople;