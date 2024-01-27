import React from 'react'
import { FaStar } from "react-icons/fa";

const Testimony = () => {
  return (
    <div className='w-full bg-sky-100'>
    <div className=' mx-auto w-[70vw] pt-12'>
        <h2 className="text-center text-zinc-800 text-[29px] font-semibold font-['Inter'] leading-[38.40px] mb-3">Our Customers Testimonies 
        </h2>

        <div className='grid grid-cols-3 gap-5 pb-20'>
            <div className='flex flex-col items-center pb-12 px-7 pt-5 bg-white shadow-sm'>
                <i className='flex gap-1'>
                   <FaStar className='text-amber-300'/> 
                   <FaStar className='text-amber-300'/> 
                   <FaStar className='text-amber-300'/> 
                   <FaStar className='text-amber-300'/> 
                   <FaStar className='text-amber-300'/> 
                </i>
                <h3 className="text-center text-zinc-800 text-xs font-semibold font-euclid leading-snug mt-3">Less paperwork
                </h3>
                <p className="text-center text-zinc-800 text-sm font-light font-euclid leading-[30px]">Previously, healthcare partnerships require paper work for information exchange. 
                Now, we have a seamless of getting 
                and managing partners
                </p>
                <span className="text-center text-zinc-800 text-xs font-semibold font-euclid leading-tight">RX Pharmacy - Oshodi 
                </span>
            </div>

            <div className='flex flex-col items-center pb-12 px-7 pt-5 bg-white shadow-sm'>
                <i className='flex gap-1'>
                   <FaStar className='text-amber-300'/> 
                   <FaStar className='text-amber-300'/> 
                   <FaStar className='text-amber-300'/> 
                   <FaStar className='text-amber-300'/> 
                   <FaStar className='text-amber-300'/> 
                </i>
                <h3 className="text-center text-zinc-800 text-xs font-semibold font-euclid leading-snug mt-3">Would recommend
                </h3>
                <p className="text-center text-zinc-800 text-sm font-light font-euclid leading-[30px]">Our global strategy requires research work to develop a demography agnostic drug. We met healthcare partners for Nigeria and 
                got useful data for research.
                </p>
                <span className="text-center text-zinc-800 text-xs font-semibold font-euclid leading-tight">Andro Pharmaceuticals 
                </span>
            </div>

            <div className='flex flex-col items-center pb-12 px-7 pt-5 bg-white shadow-sm'>
                <i className='flex gap-1'>
                   <FaStar className='text-amber-300'/> 
                   <FaStar className='text-amber-300'/> 
                   <FaStar className='text-amber-300'/> 
                   <FaStar className='text-amber-300'/> 
                   <FaStar className='text-amber-300'/> 
                </i>
                <h3 className="text-center text-zinc-800 text-xs font-semibold font-euclid leading-snug mt-3">Innovation
                </h3>
                <p className="text-center text-zinc-800 text-sm font-light font-euclid leading-[30px]">The integrate  partners into their proprietary 
                practice management solutions and connects all stakeholders 
                collaborating together.
                </p>
                <span className="text-center text-zinc-800 text-xs font-semibold font-euclid leading-tight">Ministry of Health 
                </span>
            </div>

        </div>
    </div>

    </div>
  )
}

export default Testimony