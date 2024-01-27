import React from 'react'
import { ProfileCard1,ProfileCard2,ProfileCard3 } from './ProfileCard';

const HowItWorks = () => {
  return (
    <div className='w-[70vw] mx-auto flex flex-col gap-2'>
        <h2 className="text-black text-4xl font-bold font-euclid">How it works</h2>

        <div className='flex max-[725px]:flex-col items-center w-full gap-8'>
            <div className='flex flex-col gap-5 w-[35%]  max-[725px]:w-full'>
                <div className='flex gap-6'>
                    <h3 className="text-slate-500 text-[40px] font-bold font-['Inter'] leading-none">1</h3>
                    <span className='flex flex-col gap-6'>
                        <h4 className="text-black text-xl font-medium font-euclid">Create an account
                        </h4>
                        <p className="text-black text-xs font-semibold font-euclid leading-loose">
                        Get access to our platform by signing up with basic information and certifications.  
                        </p>
                    </span>
                </div>
                <div className='flex gap-6'>
                    <h3 className="text-slate-500 text-[40px] font-bold font-['Inter'] leading-none">2</h3>
                    <span className='flex flex-col gap-6'>
                        <h4 className="text-black text-xl font-medium font-euclid">
                        Search for potential partners  
                        </h4>
                        <p className="text-black text-xs font-semibold font-euclid leading-loose">
                        Request partnerships from other direct providers (hospitals, laboratories, pharmacies) and indirect providers (HMOs, employers, Donors and R&Ds entities.
                        </p>
                    </span>
                </div>
                <div className='flex gap-6'>
                    <h3 className="text-slate-500 text-[40px] font-bold font-['Inter'] leading-none">3</h3>
                    <span className='flex flex-col gap-6'>
                        <h4 className="text-black text-xl font-medium font-euclid ">
                        Integrate to practice infrastructure  
                        </h4>
                        <p className="text-black text-xs font-semibold font-euclid leading-loose">
                        Manage operations, procurement, vendors, payments, customer feedback, and all other integrations for your entity, powered by our end-to-end healthcare operations manager.
                        </p>
                    </span>
                </div>
            </div>

                {/* the profile-section */}
            <div className='grid grid-cols-2 gap-3 justify-items-center w-[65%]  max-[725px]:w-full'>
                <ProfileCard1/>
                <ProfileCard2/>
                <ProfileCard3 extraClass={'translate-x-1/2'}/>
            </div>
        </div>
    </div>
  )
}

export default HowItWorks