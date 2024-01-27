import React, { useContext, useState } from 'react'
import { Requests_Data } from '../../Data/Requests_Data'
import { IoFilter } from "react-icons/io5";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { TiDeleteOutline } from "react-icons/ti";
import { IoInformationCircleOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { MenuContext } from '../../Context/MenuContext';




const Applications = () => {
    const [active, setActive] = useState(0)
    const [toggle, setToggle] = useState(Array(Requests_Data.length).fill(false))
    const btns = ['All applications', 'Accepted', 'Activity']
    const { setDetail,setViewDetail,ViewDetail} = useContext(MenuContext)

    const handleToggle = (i, open= true)=>{
            setToggle((prev)=>{
                    const newData = [...prev]
                    if(open)newData.fill(false);
                    newData[i] = !newData[i]
                    return newData
            })
    }

  return (
    <div className='font-euclid w-[70vw] mt-40 mx-auto'>
        <div className=" text-black text-[26px] pt-28 pb-20 font-semibold tracking-tight">Applications manager</div>
        <div className='border border-zinc-800 border-opacity-40 h-[700px] rounded-[10px] pt-6 pb-32 px-7'>
            <div className='flex items-center justify-between mb-8'>
                <div className='px-2 py-2 flex gap-5 text-white text-base items-center bg-opacity-20 bg-blue-400 rounded-[45px]'>
                    {btns.map(
                        (btn,i)=>{
                            return(
                                <button
                                onClick={()=> setActive(i)}
                                 className={`${active == i?'bg-sky-500 py-3.5 rounded-3xl':null} px-5`} key={i}>
                                    {btn}
                                </button>
                            )
                        }
                    )}
                </div>
                <div className='cursor-pointer border border-sky-500 rounded-3xl px-8 py-3 text-sky-500 flex gap-2 items-center'>
                    <span><IoFilter/></span>
                    <button>Filter</button>
                </div>
            </div>

            <div className='w-full grid grid-cols-5 mb-12 pl-6 text-black text-base font-medium font'>
                <span className='flex items-center gap-2'>
                    <input type="checkbox" />
                    Application id
                </span>
                <span>Date:</span>
                <span>Partner Name</span>
                <span>Partner Type</span>
                <span>Status</span>
            </div>

            {Requests_Data.map(
                (item,i)=>{
                    return(
                        <div key={i} className='w-full grid grid-cols-5 items-center border border-zinc-400 py-2 pl-6 text-neutral-600 text-sm '>
                            <span className='flex items-center gap-2 text-sky-500 text-sm font-light'>
                                <input
                                className='cursor-pointer'
                                 type="checkbox" />
                                {item.id}
                            </span>
                            <span>{item.period}</span>
                            <span>{item.partnerName}</span>
                            <span>{item.partnerType}</span>
                            <span className='flex items-center gap-8'>
                                <div
                                className={`${item.status == 'Pending'?'bg-amber-500  border-amber-500 text-amber-500':
                                item.status == 'Active'?'bg-emerald-600 border-emerald-600 text-emerald-600':
                                item.status == 'Inactive'?'bg-orange-700 border-orange-700 text-orange-700':null}
                                 font-medium bg-opacity-30 border w-20 text-center py-1 rounded-lg`} 
                                >{item.status}</div>
                                <span className='relative'>
                                <HiOutlineDotsVertical
                                onClick={()=>handleToggle(i)}
                                 className='cursor-pointer'/>
                                    <div 
                                    onClick={()=>handleToggle(i, false)}
                                    className={`${toggle[i]?'flex':'hidden'} absolute top-0 left-0 w-28 z-50 bg-white rounded-xl shadow text-xs p-1 flex-col gap-1 font-[inter]`}>
                                        <span
                                         onClick={()=>Requests_Data.splice(i,1)}
                                         className='flex gap-2 items-center cursor-pointer text-black hover:bg-zinc-300 hover:bg-opacity-30'>
                                            <TiDeleteOutline className=' text-red-700'/> Delete</span>
                                        <Link
                                        onClick={()=>{ setDetail(true); setViewDetail(Requests_Data[i])}}
                                         to={'/partnership-request'} className='flex gap-2 items-center cursor-pointer text-zinc-300 hover:bg-opacity-30 hover:bg-zinc-300'><IoInformationCircleOutline className=' text-neutral-400'/>View details</Link>
                                    </div>
                                </span>
                            </span>
                        </div>
                    )
                }
            )}
        </div>
    </div>
  )
}

export default Applications