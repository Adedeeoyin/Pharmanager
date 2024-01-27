import React, { useContext, useEffect} from 'react'
import Button from '../Components/Button'
import { RiArrowDropDownLine } from "react-icons/ri";
import {requests} from '../Data/Paternership_Request'
import { IoBookmarkSharp } from "react-icons/io5";
import { GoBookmark } from "react-icons/go";
import partnership_img from '../assets/Images/page-partnership-1.png'
import { Partnership_Dropdown } from '../Components/Dropdown';
import { MenuContext } from '../Context/MenuContext';
import { useLocation } from 'react-router-dom'

const Partnership = () => {
  const tags = ['criminal law', 'legal', 'attorney', 'crime']

  const {dropdownOpen2, setDropdown2} = useContext(MenuContext)
  const location = useLocation()
  const h = window.innerHeight
  useEffect(
      ()=>{
          window.scrollTo(0,0)
      },[location])

  return (
    <div className='mt-40 mx-auto w-[70vw] justify-center flex flex-col items-center '>

      <div className='w-full relative rounded-sm'>
        <img src={partnership_img} alt="" className='w-full h-full' />
        <div className='absolute shadow-md gap-8 -bottom-32 py-4 flex flex-col w-4/5 px-5 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-xl'>
            <h2 className="self-start text-center text-black text-lg font-semibold font-euclid text-nowrap">Search for requested partnerships</h2>
            <div className='flex gap-5'>
              <input type="text" className='w-4/5 border border-stone-300 pl-3 outline-none placeholder:text-neutral-400' placeholder='Location' />
              <Button.Square_sm extraClass={'bg-sky-500 w-1/5 h-full text-white'}>Search</Button.Square_sm>
            </div>
        </div>
      </div>

      <div className='flex w-full flex-col mt-32'>
        <h2 className="text-center text-black text-3xl font-semibold font-euclid">Partnerships requested</h2>
        <div className='flex gap-6 mt-5 mb-20 w-full justify-start'>
          <div className='flex gap-2 items-center '>
            <h2 className="text-black text-xl font-normal font-['Montserrat']">Recent</h2>
            <span className='text-3xl'><RiArrowDropDownLine/></span>
          </div>

          <div className='flex gap-2 items-center'>
            <h2 className="text-black text-xl font-normal font-['Montserrat']">Date Posted</h2>
            <span className='text-3xl'><RiArrowDropDownLine/></span>
          </div>

          <div className='flex gap-2 items-center relative'>
            <h2 className="text-black text-xl font-normal font-['Montserrat']">Request Partner Type</h2>
            <span className='text-3xl'>
              <RiArrowDropDownLine
              className='cursor-pointer'
              onClick={()=> setDropdown2(!dropdownOpen2)}
              />
              </span>
            {dropdownOpen2 && <Partnership_Dropdown/>}
          </div>
          
        </div>
        {/* requests and form */}
        <div className='flex w-full gap-4'>
          <div className='flex flex-col gap-4 w-2/5'>
              {requests.map(
                  (request, index) =>{
                    return(
                      <div key={index} className='p-3 rounded-2xl shadow border border-zinc-100 flex flex-col gap-4'>
                        <div className='flex gap-2 justify-between items-start'>
                          <img 
                          src={request.img} 
                          className='w-8 '
                          alt="client-avatar"  />
                          <div className='flex flex-col gap-1 items-start'>
                            <h2 className="text-center text-black text-base font-semibold font-['Montserrat']">{request.title}</h2>
                            <h3 className="text-black text-xs font-medium font-['Montserrat']">{request.client_name}</h3>
                            <p className="w-[180px] text-neutral-600 text-xs font-normal font-['Montserrat']">{request.description}</p>
                          </div>
                          <span className='border border-gray-200 rounded-full p-2'>
                          {/* <IoBookmarkSharp className='text-[rgba(3, 12, 89, 1)]' /> */}
                          <GoBookmark className='text-[#56494E80]'/>
                          </span>
                        </div>
                        <div className='flex gap-3 flex-wrap'>
                          {request.selections.map(
                            (item,index) => {
                              return(
                                <div key={index} className='shadow p-1 flex items-center justify-center rounded-md bg-[#EEEEEE]'>
                                   <p className="text-center text-black text-xs font-normal font-['Montserrat'] text-nowrap">{item}</p>
                                </div>
                              )
                            }
                          )}
                        </div>
                      </div>
                    )
                  }
              )}
          </div>
          {/* form */}
          <div className='p-3 flex flex-col gap-5 w-3/5 rounded-2xl border border-zinc-100'>
              <div className='flex w-full justify-between'>
                <div className='flex items-start gap-6'>
                  <img src={requests[0].img} alt="client-avatar" />
                  <span className='flex flex-col gap-2'>
                    <h2 className="text-center text-black text-xl font-semibold font-['Montserrat']">Hospital services</h2>
                    <p className="text-black text-sm font-medium font-['Montserrat']">Femi Otebola</p>
                  </span>
                </div>
                
                <span className='border border-gray-200 rounded-full p-2 self-start'>
                          {/* <IoBookmarkSharp className='text-[rgba(3, 12, 89, 1)]' /> */}
                          <GoBookmark className='text-[#56494E80]'/>
                </span>
              </div>
              <h2 className="text-black text-sm font-semibold font-['Montserrat']">Project Overview</h2>
              <p className="text-black text-sm font-normal font-['Montserrat']">
              The ideal candidate should have an LLB with a minimum of 2nd Class Upper division with 3 - 7 years experience in Litigation at trial and appellate courts. The ideal candidate should have an LLB with a minimum of 2nd Class Upper division with 3 - 7 years experience in Litigation at trial and appellate courts. The ideal candidate should have an LLB with a minimum of 2nd Class Upper division with 3 - 7 years experience in Litigation at trial and appellate courts. The ideal candidate should have an LLB with a minimum of 2nd Class Upper division with 3 - 7 years experience in Litigation at trial and appellate courts.
              </p>
              <h3 className="text-black text-sm font-semibold font-['Montserrat']">Responsibilities</h3>
              <p className="text-black text-sm font-normal font-['Montserrat']">The ideal candidate should have an LLB with a minimum of 2nd Class Upper division with 3 - 7 years experience in Litigation at trial and appellate courts.
              </p>

              <div className='flex flex-col gap-6'>
                <h4 className="text-black text-sm font-semibold font-['Montserrat']">Tags</h4>
                <div className='flex gap-3'>
                  {tags.map(
                    (tag, index) => {
                      return(
                        <div key={index} className='shadow p-1 flex items-center justify-center rounded-md bg-[#EEEEEE]'>
                          <p className="text-center text-black text-xs font-normal font-['Montserrat'] text-nowrap">{tag}</p>
                        </div>
                      )
                    }
                  )}
                </div>
              </div>

              <form className='flex flex-col mt-12'>
                <label htmlFor="" className="text-black text-sm font-medium font-['Montserrat']">Email Address 
                <span className='text-orange-700'>*</span></label>
                <input type="text" className='w-full p-2 border rounded border-stone-300 outline-none' />

                <label htmlFor="" className="text-black text-sm font-medium font-['Montserrat'] mt-4">Pharmanager Partner Number 
                <span className='text-orange-700'>*</span></label>
                <input type="text" className='w-full p-2 border rounded border-stone-300 outline-none' />

                <label htmlFor="" className="text-black text-sm font-medium font-['Montserrat'] mt-4">Cover Note 
                </label>
                <textarea className='w-full border rounded border-stone-300 outline-none p-2' name="" id="" cols="30" rows="10"></textarea>

                <Button.Square_sm extraClass={'bg-sky-500 text-white max-w-[219px] mx-auto mt-4 px-3'}>Apply here</Button.Square_sm>
              </form>
          </div>


        </div>
      </div>
    </div>
  )
}

export default Partnership