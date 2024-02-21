import React, { useRef, useState, useEffect } from 'react'
import Inputs from '../Components/Inputs'
import { RiArrowDropDownLine } from "react-icons/ri";
import Button from '../Components/Button';
import { ProfileCard1, ProfileCard2, ProfileCard3 } from '../Components/ProfileCard';
import category_img from '../assets/Images/page-category1.png'
import { useLocation } from 'react-router-dom';
import Label_LocationSearchInput from '../Services/Location_API_Label';

const Categories = () => {
  const [focus_name, setFocus_name] = useState(false)
  const [focus_location, setFocus_location] = useState(false)
  const p_nameRef = useRef()
  const locationRef = useRef()
  const location = useLocation()
  const h = window.innerHeight
  useEffect(
      ()=>{
          window.scrollTo(0,0)
      },[location])

  return (
    <div className='mt-40 mx-auto w-[70vw] justify-center flex flex-col items-center'>

        <div className='w-full relative'>
        <img src={category_img} alt="" className='w-full h-full object-cover object-center' />
          <div className='absolute top-1/2 left-1/2 w-4/5 -translate-x-1/2 -translate-y-1/2 bg-white flex flex-col py-10 justify-center px-10 '>
            <h2 className="text-black text-2xl font-semibold font-euclid leading-[50px]">Enter partner type or name
            </h2>
            
            <form className='grid grid-cols-4 gap-3 mt-10 w-full'>
              <div className='relative flex-1 '>
                <label onClick={()=> {setFocus_name(true); p_nameRef.current.focus()}} className={` left-2 ${focus_name?'-top-2 text-blue-800':'top-2 text-gray-600'} transition-all duration-500 px-1 bg-white absolute  text-xs font-medium font-euclid`}>Partner name
                </label>
                <Inputs.Input_sm
                onFocus={()=> setFocus_name(true)}
                onBlur={(e)=> {setFocus_name(false); e.target.value !== ''? setFocus_name(true): false}}
                r={p_nameRef}
                myClass={`${focus_name?'focus:border-blue-800 ':''}`}/>
              </div>

              <div className='relative flex-1'>
                <label className="left-1 top-2 px-1 bg-white absolute text-gray-600 text-xs font-medium font-euclid">Partner type
                </label>
                <Inputs.Input_sm extra={true}/>
                <span className='absolute top-1.5 right-1 text-2xl text-gray-600 cursor-pointer '><RiArrowDropDownLine/></span>
              </div>

              <Label_LocationSearchInput width={'w-full'} />
              {/* <div className='relative flex-1'>
                <label onClick={()=> {setFocus_location(true); locationRef.current.focus()}} className={` left-2 ${focus_location?'-top-2 text-blue-800':'top-2 text-gray-600'} transition-all duration-500 px-1 bg-white absolute  text-xs font-medium font-euclid`}>Location
                </label>
                <Inputs.Input_sm
                onFocus={()=> setFocus_location(true)}
                onBlur={(e)=> {setFocus_location(false); e.target.value !== ''? setFocus_location(true): false}}
                r={locationRef}
                myClass={`${focus_location?'focus:border-blue-800 ':''}`}/>
              </div> */}

              <Button.Square_sm type='submit' onClick={(e)=> e.preventDefault()} extraClass={'bg-sky-500 w-full h-full text-white'}>Search</Button.Square_sm>
                
            </form>
          </div>
      </div>

      <section className='flex w-full flex-col gap-10 px-24 py-24'>
        <h2 className="text-black text-[40px] font-semibold font-euclid leading-[50px]">Today’s Stats</h2>
        <div className='grid grid-cols-3 gap-6 w-full'>
          <div className='py-5 w-full  flex-1 bg-sky-500 rounded-lg border border-neutral-300 flex-col justify-center items-center gap-4 inline-flex'>
            <i></i>
            <h2 className="text-slate-50 text-2xl font-medium font-euclid leading-[30px]">350,000</h2>
            <p  className="text-slate-50 text-xs text-nowrap font-medium font-euclid leading-normal">Total Registered Providers</p>
          </div>

          <div className='py-5 w-full flex-1 bg-sky-500 rounded-lg border border-neutral-300 flex-col justify-center items-center gap-4 inline-flex'>
            <i></i>
            <h2 className="text-slate-50 text-2xl font-medium font-euclid leading-[30px]">100,000</h2>
            <p  className="text-slate-50 text-xs text-nowrap font-medium font-euclid leading-normal">Total Partnerships</p>
          </div>

         <div className='py-5 w-full flex-1 bg-sky-500 rounded-lg border border-neutral-300 flex-col justify-center items-center gap-4 inline-flex'>
            <i></i>
            <h2 className="text-slate-50 text-2xl font-medium font-euclid leading-[30px]">3,000,000+</h2>
            <p  className="text-slate-50 text-xs text-nowrap font-medium font-euclid leading-normal">Total Patients Managed</p>
          </div>
        </div>
      </section>

      <section className='flex w-full flex-col gap-10 px-24 py-24 pb-12'>
        <div className='flex justify-between items-center'>
          <h2 className="text-slate-900 text-[40px] font-semibold font-euclid leading-[50px]">Featured partners</h2>
          <span className="text-gray-600 text-xl font-normal font-euclid leading-[30px]">See all</span>
        </div>
        <div className='grid autofit gap-3'>
          <ProfileCard1/>
          <ProfileCard2/>
          <ProfileCard3/>
        </div>
      </section>

  </div>
  )
}

export default Categories