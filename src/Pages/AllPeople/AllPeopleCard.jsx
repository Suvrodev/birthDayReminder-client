import React from 'react';
import CheckImage from '../../assets/regImage.jpg'
import { FaArrowCircleRight, FaPrescriptionBottle } from 'react-icons/fa';

const AllPeopleCard = () => {
    const handleDelete=()=>{
        console.log("Delete")
    }
    const handleUpdate=()=>{
        console.log("Update")
    }
    return (
        <div className='flex mx-auto w-1/2 h-80 rounded-3xl border'>
            <div className='w-1/2 p-4 flex items-center'>
                <img className='rounded-3xl' src={CheckImage} alt="" />
            </div>

            <div className='font-bold flex bg-green-400 rounded-3xl w-1/2 flex-col'>
                <div className=' text-black flex items-center justify-center flex-col w-full h-1/2'>
                    <h1 className='font-bold text-xl'>Name</h1>
                    <h4>DOB</h4>
                    <p>Reference</p>
                </div>

                <div className='w-full h-1/2 flex text-2xl justify-between p-5 items-end'>
                    <span onClick={handleDelete} className='text-red-600'><FaPrescriptionBottle/></span>
                    <span onClick={handleUpdate} className='text-green-700'><FaArrowCircleRight/></span>
                </div>
            </div>
        </div>
    );
};

export default AllPeopleCard;