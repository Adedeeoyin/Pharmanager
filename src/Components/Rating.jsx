import React from 'react'
import { FaStar } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa6";

const Rating = ({rating, text}) => {

  return (
    <div className='flex gap-1 items-center'>
        {rating <=5 && [...Array(rating)].map(
            (_, index)=>{
                return(
                    <span key={index} className='text-orange-400'><FaStar/></span>
                )
            }
        )}
        {rating<=5 && [...Array(5-rating)].map(
            (_, index)=>{
                return(
                    <span key={index} className='text-orange-400'><FaRegStar/></span>
                )
            })}
            <p className="text-slate-900 text-base font-medium font-euclid leading-normal">{text}</p>
    </div>
  )
}

export default Rating