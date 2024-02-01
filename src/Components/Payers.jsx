import React from 'react'
import Button from './Button'
import payer_img from '../assets/Images/payers.png'


const Payers = () => {
  return (
    <div className='w-[70vw] mx-auto grid grid-cols-2 rounded-[5px]'>
        <div className='w-full h-full bg-[#54A4CC] flex flex-col gap-14 pt-16 pl-9 pr-20'>
            <Button.Rounded_sm extraClass={'bg-[#386A8B]'}>For payers</Button.Rounded_sm>
            <h2 className="text-white text-xl font-semibold font-euclid leading-loose tracking-tight">Business intelligence and <br/>access
            </h2>
            <p className=" text-white text-sm font-medium font-euclid tracking-tight">Are you an employer, research institution, donor or HMO looking to partner with health providers? Start collaborating now to achieve your strategic goals and objectives.
            </p>
            <Button.Square_md>GET STARTED</Button.Square_md>
        </div>

       
        <div className='w-full h-full'>
          <img
          className='w-full object-cover object-center h-full'
           src={payer_img}
            alt="payer-img" />
        </div>
        
    </div>
  )
}

export default Payers