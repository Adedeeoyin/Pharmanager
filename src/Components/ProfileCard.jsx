import React, { useContext } from 'react'
import { CiHeart } from "react-icons/ci";
import { MdVerified } from "react-icons/md";
import { FaStar } from "react-icons/fa";
import Button from './Button';
import { MenuContext } from '../Context/MenuContext';
import profile1_avatar from '../assets/Images/profile1.png'
import profile2_avatar from '../assets/Images/profile-2.png'
import profile3_avatar from '../assets/Images/profile3.png'

export const ProfileCard1 = () => {
    const {setDetail} = useContext(MenuContext)
  return (
         
                <div className='h-full w-full inline-block shadow rounded-[16px]'>
                    <div className=' w-full h-[20vh] relative'>
                            <img src={profile1_avatar} alt="profile-1"className='w-full h-full object-cover object-center' />
                            <span className='absolute top-2 right-2 rounded-full bg-white p-2'>
                                <CiHeart className='text-[#009FE3]'/>
                            </span>
                    </div>
                    <div className='flex flex-col gap-2 p-3 bg-white'>
                        <h2 className="text-gray-600 text-xs font-medium font-euclid">HOSPITALS
                        </h2>
                        <span className='flex items-center'>
                            <h2 className="text-slate-900 font-medium font-euclid leading-[30px] pr-1 text-nowrap text-sm">Karmen Medicals</h2>
                            <MdVerified className='text-sky-700'/>
                        </span>
                        <p className="text-gray-600 text-xs font-medium font-euclid leading-normal">Lagos, Nigeria</p>
                        <div className='flex items-center'>
                            <FaStar className='text-orange-400 -orange-400'/>
                            <div className="pl-1 text-gray-600 text-xs font-medium font-euclid text-nowrap">
                                <span className="text-slate-900 text-xs font-medium font-euclid leading-normal">4.8</span> (112) · 156 active partnerships</div>
                        </div>
                        <div className='flex gap-2'>
                            <Button.Square_sm_Link to={'/profile-1'}  extraClass={'w-1/2 bg-white text-sky-500'}>View profile</Button.Square_sm_Link>
                            <Button.Square_sm_Link
                            onClick={()=> setDetail(false)}
                             to={'/partnership-request'}  extraClass={'w-1/2 text-white bg-sky-500'}>Request partnership</Button.Square_sm_Link>
                        </div>
                    </div>
                </div>
  )
}

export const ProfileCard2 = ()=> {
    const {setDetail} = useContext(MenuContext)
    return(
        <div className='h-full w-full inline-block shadow rounded-[16px]'>
                    <div className=' w-full h-[20vh] relative'>
                            <img src={profile2_avatar} alt="profile-2"className='w-full h-full object-cover object-center' />
                            <span className='absolute top-2 right-2 rounded-full bg-white p-2'>
                                <CiHeart className='text-[#009FE3]'/>
                            </span>
                    </div>
                    <div className='flex flex-col gap-2 p-3 bg-white'>
                        <h2 className="text-gray-600 text-xs font-medium font-euclid">PHARMACIES
                        </h2>
                        <span className='flex items-center'>
                            <h2 className="text-slate-900 text-sm font-medium font-euclid leading-[30px] pr-1 text-nowrap">Gallant Pharmaceuticals</h2>
                            <MdVerified className='text-sky-700'/>
                        </span>
                        <p className="text-gray-600 text-xs font-medium font-euclid leading-normal">Abuja, Nigeria</p>
                        <div className='flex items-center'>
                            <FaStar className='text-orange-400 -orange-400'/>
                            <div className="pl-1 text-gray-600 text-xs font-medium font-euclid text-nowrap">
                                <span className="text-slate-900 text-xs font-medium font-euclid leading-normal">5.0</span> (96) · 120 active partnerships</div>
                        </div>
                        <div className='flex gap-2'>
                            <Button.Square_sm_Link to={'/profile-1'}  extraClass={'w-1/2 bg-white text-sky-500'} >View profile</Button.Square_sm_Link>
                            <Button.Square_sm_Link
                            onClick={()=> setDetail(false)}
                             to={'/partnership-request'}  extraClass={'w-1/2 text-white bg-sky-500'}>Request partnership</Button.Square_sm_Link>
                        </div>
                    </div>
                </div>
    )

}

export const ProfileCard3 = ({extraClass})=> {
    const {setDetail} = useContext(MenuContext)
    return(
        <div className={`h-full w-full inline-block shadow rounded-[16px] ${extraClass} `}>
                    <div className=' w-full h-[20vh] relative'>
                            <img src={profile3_avatar} alt="profile-3"className='w-full h-full object-cover object-center' />
                            <span className='absolute top-2 right-2 rounded-full bg-white p-2'>
                                <CiHeart className='text-[#009FE3]'/>
                            </span>
                    </div>
                    <div className='flex flex-col gap-2 p-3 bg-white'>
                        <h2 className="text-gray-600 text-xs font-medium font-euclid">DONORS AND NGOS
                        </h2>
                        <span className='flex items-center'>
                            <h2 className="text-slate-900 text-base font-medium font-euclid leading-[30px] pr-1 text-nowrap">USAID
                            </h2>
                            <MdVerified className='text-sky-700'/>
                        </span>
                        <p className="text-gray-600 text-xs font-medium font-euclid leading-normal">Kaduna, Nigeria</p>
                        <div className='flex items-center'>
                            <FaStar className='text-orange-400 -orange-400'/>
                            <div className="pl-1 text-gray-600 text-xs font-medium font-euclid text-nowrap">
                                <span className="text-slate-900 text-xs font-medium font-euclid leading-normal">5.0</span> (12) · 32 active partnerships</div>
                        </div>
                        <div className='flex gap-2'>
                            <Button.Square_sm_Link to={'/profile-1'}  extraClass={'w-1/2 bg-white text-sky-500'} >View profile</Button.Square_sm_Link>
                            <Button.Square_sm_Link
                            onClick={()=> setDetail(false)}
                             to={'/partnership-request'}  extraClass={'w-1/2 text-white bg-sky-500'}>Request partnership</Button.Square_sm_Link>
                        </div>
                    </div>
                </div>
    )

}