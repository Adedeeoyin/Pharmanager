import React, { useContext, useRef } from 'react'
import pharmacyStore from '../assets/Images/pharmacy-store 1.jpg'
import { CiSearch } from "react-icons/ci";
import { FaLocationDot } from "react-icons/fa6";
import { RiArrowDropDownLine } from "react-icons/ri";
import drugstore from '../assets/Images/drugstore.png'
import mopheth from '../assets/Images/mopheth.png'
import wikimedia from '../assets/Images/wikimedia.png'
import alpha from '../assets/Images/alpha.png'
import greenCross from '../assets/Images/green-cross.png'
import { MenuContext } from '../Context/MenuContext';
import {HeroDropdown} from './Dropdown';
import LocationSearchInput from '../Services/Location_API';

const Hero = () => {
    const {dropdownOpen,setDropdown} = useContext(MenuContext);
    const inputPartnership = useRef()

  return (
    <>
    <div className='min-h-[600px] w-[85vw] grid items-center grid-cols-2 mx-auto mt-20 max-w-[1962px] font-euclid'>

        <div className='w-full flex flex-col max-xl:text-center max-xl:items-center'>
            <h2 className='text-zinc-800 font-bold  leading-[67.20px] text-[40px] z-10 overflow-visible text-nowrap mb-4'>Deliver better healthcare<br />outcomes through partnerships.</h2>
            <p className='text-zinc-800 text-lg font-normal z-10 text-nowrap leading-[30px]'>Work with direct and indirect providers of healthcare to bring deliver <br/>interoperable and comprehensive services.</p>

            <form className='w-[90%] max-w-[796px] flex gap-2 justify-between items-center px-[12px] py-[10px] bg-neutral-100 bg-opacity-90 rounded-l relative mt-16 max-xl:-ml-20'>

                <div className='w-full flex items-center z-30 overflow-visible'>
                    <CiSearch
                    onClick ={()=> inputPartnership.current.focus()}
                     className=' text-neutral-400 cursor-pointer'/>
                     
                    <input
                    ref={inputPartnership}
                    type="text"
                    placeholder='What type of partnership do you need?'
                    className='pl-[10px] bg-transparent outline-none w-full max-w-[332px] placeholder:text-sm'
                    />
                </div>
               
                <div className='flex gap-6 items-center'>
                   <div className='flex items-center'>
                    <FaLocationDot className='text-neutral-400'/>
                    <LocationSearchInput width={'w-[14rem]'} />
                    {/* <input  className='placeholder:text-neutral-400 placeholder:text-sm text-neutral-600 pl-[13px] pr-8  bg-transparent max-w-32 outline-none' placeholder='Local area' /> */}
                    <RiArrowDropDownLine
                     className={`${dropdownOpen && 'rotate-180'} self-end text-neutral-400 text-3xl cursor-pointer`}
                     onClick={()=> setDropdown(!dropdownOpen) }
                     />
                     {dropdownOpen && <HeroDropdown/>}
                    </div>
                    <button
                    onClick={(e)=> e.preventDefault()}
                     className='bg-sky-100 absolute top-0 -right-16 text-sm px-4  h-full text-zinc-800'>Submit
                     </button>
                </div>
                  
            </form>

            <div className='flex gap-2.5 mt-20'>
        <div className='border-r-2 border-sky-400 pr-1 mr-5'>
            <h3 className='text-zinc-800 text-lg font-bold '>Contracts</h3>
            <p className='text-neutral-500 text-sm font-normal  leading-none'>Sign contracts with partner</p>
        </div>
        <div className=''>
            <h3 className='text-zinc-800 text-lg font-bold '>Multiple choices</h3>
            <p className='text-neutral-500 text-sm font-normal  leading-none'>Compare various prices</p>
        </div>
        <div className='border-l-2 border-sky-400 pl-5 ml-5 '>
            <h3 className='text-zinc-800 text-lg font-bold '>Integrate partner into EHR</h3>
            <p className='text-neutral-500 text-sm font-normal  leading-none'>Infrastructure-based support for partners</p>
        </div>
    </div>

        </div>

        <div className='w-full h-full flex-1'>
            <img
             src={pharmacyStore}
              alt="pharmacy-store-illustration"
              className='  h-full w-full -z-10'
              />
        </div>
    </div>

        <div className='flex bg-gray-100 bg-opacity-40 border-neutral-200 w-full  items-center pt-6 pb-[25px]'>
            <div className='w-[70vw] mx-auto flex flex-wrap items-center justify-between'>
                <div className='w-[73.59px] h-[22px] text-zinc-800 text-sm font-normal  leading-normal text-nowrap'>Trusted by</div>
                <img src={mopheth} alt="mopheth" />
                <img src={greenCross} alt="green-cross" />
                <img src={alpha} alt="alpha pharmacy" />
                <img src={drugstore} alt="drugstore" />
                <img src={wikimedia} alt="wikimedia" />
                <img src={mopheth} alt="mopheth" />
            </div>
        </div>
    </>
  )
}

export default Hero