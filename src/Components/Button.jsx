import React from 'react'
import { Link } from 'react-router-dom'

const Rounded_xl = ({children, onClick}) => {
  return (
    <div className="px-9 cursor-pointer py-2.5 bg-sky-400 rounded-[999px] border-2 border-sky-400 justify-start items-start inline-flex my-12">
      <button onClick={onClick} className="text-center text-white text-[15px] font-medium font-euclid uppercase leading-normal">{children}</button>
      </div>
  )
}

const Rounded_sm = ({children, extraClass, onClick}) => {
    return (
        <div className={`${ extraClass} cursor-pointer rounded-[20px] self-start px-9 py-3 `}>
        <button onClick={onClick} className=" text-cente text-white textxl font-normal font-euclid tracking-tight">{children}</button>
    </div>
    )
}

const Square_md = ({children, onClick}) => {
    return (
        <div className='bg-white cursor-pointer px-16 py-3 rounded-[4px] mb-64 flex justify-center self-start'>
            <button onClick={onClick} className='text-[#386A8B] font-euclid text-nowrap text-center'>{children}</button>
        </div>
    )
}

const Square_sm = ({extraClass, children, onClick}) => {
    return (
        
            <button onClick={onClick} className={`${extraClass} py-1.5 cursor-pointer rounded-[4px] flex justify-center self-start border border-sky-500 font-euclid text-nowrap text-center text-[10px]`}>{children}</button>
        
    )
}

const Square_sm_Link = ({extraClass, children, onClick, to, type}) => {
    return (
        <Link to={to} className={`${extraClass} py-1.5 px-1 cursor-pointer rounded-[4px] flex justify-center self-start border border-sky-500 font-euclid`}>
            <button type={type} onClick={onClick} className={`text-nowrap text-center text-[10px]`}>{children}</button>
        </Link>
    )
}

export default {
    Rounded_xl ,
    Rounded_sm,
    Square_md,
    Square_sm,
    Square_sm_Link
}