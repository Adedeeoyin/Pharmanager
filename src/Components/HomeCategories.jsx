import React from 'react'
import pharmarcies from '../assets/Images/pharmacies.png'
import hospitals from '../assets/Images/hospitals.png'
import digital_tools from '../assets/Images/digital-tools.png'
import health_insurance from '../assets/Images/health-insurance.png'
import employers from '../assets/Images/employers.png'
import donors from '../assets/Images/donor.png'
import laboratories from '../assets/Images/laboratories.png'
import support from '../assets/Images/support.png'
import Button from './Button'

const Categories = () => {
  return (
    <div className='w-full bg-gray-100'>
    <div className='w-[70vw] mx-auto pt-12 flex flex-col items-center'>
      <h2 className='text-center text-zinc-800 text-[25px] font-semibold font-euclid leading-[33.60px]'>Choose from Our Top Categories</h2>
      <p className='text-center text-zinc-800 text-lg font-normal font-euclid leading-[30px] pb-6'>Our best selling products for Business/Individual.</p>
      <div className='w-full grid grid-cols-4 max-[880px]:grid-cols-3 gap-8'>
        <div className='flex flex-col items-center bg-blue-200'>
          <span className='home-category'>Pharmacies</span>
          <img className='w-full object-cover' src={pharmarcies} alt="pharmacies" />
        </div>
        <div className='flex flex-col items-center bg-[#AAD0E7]'>
          <span className='home-category'>Hospitals</span>
          <img className='w-full object-cover' src={hospitals} alt="hospitals" />
        </div>
        <div className='flex flex-col items-center bg-cyan-600'>
          <span className='home-category'>Digital Tools</span>
          <img className='w-full object-cover' src={digital_tools} alt="digital-tools" />
        </div>
        <div className='flex flex-col items-center bg-slate-400'>
          <span className='home-category'>Health Insurance Organizations</span>
          <img className='w-full object-cover' src={health_insurance} alt="health-insurance" />
        </div>
        <div className='flex flex-col items-center bg-neutral-400'>
          <span className='home-category'>Employers</span>
          <img className='w-full object-cover' src={employers} alt="employers" />
        </div>
        <div className='flex flex-col items-center bg-stone-300'>
          <span className='home-category'>Donors and NGOs</span>
          <img className='w-full object-cover' src={donors} alt="donors" />
        </div>
        <div className='flex flex-col items-center bg-sky-300'>
          <span className='home-category'>Laboratories</span>
          <img className='w-full object-cover' src={laboratories} alt="laboratories" />
        </div>
        <div className='flex flex-col items-center bg-slate-300'>
          <span className='home-category'>Support e.g Advisory, R&D, Investors</span>
          <img className='w-full object-cover' src={support} alt="support" />
        </div>
      </div>

      <Button.Rounded_xl>VIEW ALL POTENTIAL PARTNERS</Button.Rounded_xl>
    </div>
    </div>
  )
}

export default Categories