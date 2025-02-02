import React from 'react'
import { useDispatch } from "react-redux";
import { openPopup } from '../../app/slice';
import html from "../../assets/html-5.png"
import { Button } from '@mui/material';
function Hyper() {
    const dispatch = useDispatch(); 
  return (
    <div className='flex flex-col md:flex-row items-center bg-white border border-gray-300 rounded-xl shadow-md max-w-[40rem] p-6 md:p-8 gap-4 w-full'>
    <div className='flex flex-col md:flex-row gap-4 w-full md:w-auto  md:justify-between'>
      <img src={html} alt='HTML5 Logo' className='w-16' />
      <div className=' md:text-left'>
        <h3 className='text-lg font-bold'>Hyper Text Markup Language</h3>
        <p className='text-gray-600 text-sm'>
          Questions: <span className='font-medium'>08</span> | Duration: <span className='font-medium'>15 mins</span> | Submitted on <span className='font-medium'>5 June 2021</span>
        </p>
      </div>
    </div>
    <div className='w-full md:w-auto flex  md:justify-end'>
      <Button className=' text-white  py-2 h-fit px-6 rounded-lg font-semibold ' onClick={() => dispatch(openPopup())} style={{   backgroundColor: "rgb(30 58 138 / var(--tw-bg-opacity, 1))"
, color:"#fff"}}>
        Update
      </Button>
    </div>
  </div>
  )
}

export default Hyper

