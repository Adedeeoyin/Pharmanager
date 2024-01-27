import React from 'react'
import Button from './Button'
import providers from '../assets/Images/providers.png'

const Providers = () => {
  return (
    <div className='mx-auto w-[70vw] pt-32 mb-56 '>
        <div className=' bg-[#62909F] pt-16 pl-9 flex flex-col relative'>
            <Button.Rounded_sm extraClass={'bg-[#4B6C77]'}>For providers</Button.Rounded_sm>
            <h2 className=" text-white text-xl font-semibold font-euclid tracking-tight mt-14">Contract and collaborate with<br/>other stakeholders for value
            </h2>
            <p className="text-white text-sm font-medium font-euclid leading-loose tracking-tight mt-14 mb-16">Meet and work with other health <br />stakeholders to achieve better population- <br/>based healthcare outcomes.
            </p>
            <Button.Square_md className='scale-75'>GET STARTED</Button.Square_md>
            <img
             src={providers}
              alt=""
              className='absolute bottom-0 right-10 max-xl:w-[45%] w-[55%] h-[90%]' 
            />
        </div>
    </div>
  )
}

export default Providers