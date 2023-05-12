import React from 'react';
import CheckImage from '../../assets/regImage.jpg'
import { FaArrowCircleRight, FaPrescriptionBottle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const AllPeopleCard = ({people}) => {

    console.log(people)
    const {_id,photo,name,dob,Ref_Email}=people;
   
  
    
    const handleDelete=()=>{
        console.log("Delete")
    }
    const handleUpdate=()=>{
        console.log("Update")
    }
    return (
        <div className='flex flex-col   mx-auto sm:h-fit  rounded-3xl border mt-20'>
            <div className=' sm:w-full lg:p-4 flex items-center'>
                <img className='rounded-3xl' src={photo} alt="" />
            </div>

            <div className='font-bold flex bg-green-400 rounded-3xl  sm:w-full flex-col'>
                <div className=' text-black flex items-center justify-center flex-col w-full h-1/2'>
                    <h1 className='font-bold text-xl'>{name}</h1>
                    <h4>{dob}</h4>
                    <p>{Ref_Email}</p>
                </div>

                <div className='w-full h-1/2 flex text-2xl justify-between p-5 items-end'>
                    <span onClick={handleDelete} className='text-red-600'><FaPrescriptionBottle/></span>
                   <Link to={`/update/${_id}`}> <span onClick={handleUpdate} className='text-green-700'><FaArrowCircleRight/></span></Link>
                   
                </div>
            </div>
        </div>
    );
};

export default AllPeopleCard;