import React, {useEffect, useContext} from 'react'
import { Link, useLocation } from 'react-router-dom'
import partnership_img from '../../assets/Images/page-partnership-1.png'
import avatar1 from '../../assets/Images/profile1.png'
import { MdVerified } from 'react-icons/md'
import { FaStar } from "react-icons/fa";
import Button from '../../Components/Button'
import FormikContainer from '../../Components/Formik/FormikContainer'
import { MenuContext } from '../../Context/MenuContext'
import Pro_review from '../../assets/Images/pro-review-p_request.png'
import { TiTick } from "react-icons/ti";
import Partnership_details from '../../Components/Partnership_details'

const Partnership_Request = () => {
  const {step,detail,ViewDetail} = useContext(MenuContext)
  const details = ['Business details', 'Contact person details', 'Partnership details', 'Review']
  const location = useLocation()
    useEffect(
        ()=>{
            window.scrollTo(0,0)
        },[location])

  const progress = "before:content-[''] before:absolute before:top-1/2 before:w-full before:h-[3px] before:-z-20 before:right-2/4"

  return (
    <div className='mt-40 mx-auto w-[70vw] justify-center flex flex-col items-center font-euclid'>
      {step == 5? 
      <div className='w-full relative rounded-sm'>
        <img src={Pro_review} alt="" className='w-full h-full' />
        <div className='absolute top-12 left-16 w-[45%] rounded-lg bg-white h-[55%] px-10 flex flex-col justify-center gap-3'>
        <div className="text-slate-900 text-[32px] font-semibold flex items-center gap-3">
          <span className=' w-8 h-8 bg-sky-600 rounded-full'><TiTick className=' text-white'/></span>
          <h2>Request sent</h2>
        </div>
        <p className=" text-gray-600 text-base font-medium">The partner will look at your request, and let you know their decision. A notification will be sent to you if accepted or declined.</p>
        <Button.Square_sm extraClass={'w-1/3 h-8 bg-sky-600 text-white text-base font-medium'}>View</Button.Square_sm>
        </div>
      </div>:


      <>
       <div className='w-full relative rounded-sm'>
        <img src={partnership_img} alt="" className='w-full h-full' />

        <div className='absolute -bottom-14 flex justify-between items-end w-[60vw] left-1/2 -translate-x-1/2 shadow-black shadow-md bg-white p-3'>
          <div className='flex'>
            <img src={avatar1} alt="avatar1" className='max-w-[171px]'/>
            <div className='ml-4 flex flex-col justify-between'>
              <div className='flex flex-col'>
            <span className='flex items-center'>
              <h2 className="text-slate-900 font-medium font-euclid leading-[30px] pr-1 text-nowrap text-sm">Karmen Medicals</h2>
              <MdVerified className='text-sky-700'/>
            </span>
              <p className="text-neutral-600 text-xs font-normal font-euclid tracking-tight">Lagos, Nigeria</p>
              </div>
              <Link to={'/profile-1'} className="text-blue-400 text-lg font-medium font-euclid tracking-tight">View profile</Link>
            </div>
            {detail?
            <div
              className={`${ViewDetail?.status == 'Pending'?'bg-amber-500  border-amber-500 text-amber-500':
              ViewDetail?.status == 'Active'?'bg-emerald-600 border-emerald-600 text-emerald-600':
              ViewDetail?.status == 'Inactive'?'bg-orange-700 border-orange-700 text-orange-700':null}
                font-medium bg-opacity-30 absolute right-8 border w-20 text-center py-1 rounded-lg`} 
              >{ViewDetail?.status}</div>:null}
          </div>

          <div className=' flex items-center gap-1'>
            <FaStar className='text-orange-500'/>
            <div className="pl-1 text-gray-600 text-xs font-medium font-euclid text-nowrap">
                <span className="text-slate-900 text-xs font-medium font-euclid leading-normal">4.8</span> (112) · 156 active partnerships
            </div>
          </div>
        </div>
      </div>

      {detail?
      <Partnership_details/>:
      <>
      <div className='w-[50vw] max-w-full flex justify-between items-center mx-auto mt-28'>
        {
          details.map(
            (detail,i)=> {
              return(
                <span
                 key={i}
                  className={`${i > 0 && progress}
                   ${step > (i + 1)?'before:bg-sky-600':'before:bg-gray-400'} bg-white px-2 relative flex items-center gap-1`}>
                  <h2 
                  className={`detail-h2 ${step > (i + 1)? 'text-white bg-sky-600 border-sky-600':
                  step == (i + 1)?'border-sky-600 text-sky-600':
                  'text-slate-600 border-slate-600'} `}>
                    {step > (i + 1)? <span>&#x2713;</span> :i + 1 }</h2>
                  <p 
                  className={`${step > (i + 1)? 'text-sky-600':
                  step == (i + 1)?'text-sky-600':
                  'text-slate-600 '}  text-xs font-medium`}>{detail}</p>
              </span>
              )
            }
          )
        }
       
      </div>
      
      <FormikContainer/>
      </>
      }
      </>
      }
    </div>
  )
}

export default Partnership_Request