import React from 'react'
import study1 from '../assets/Images/study-1.png'
import study2 from '../assets/Images/study-2.png'
import study3 from '../assets/Images/study-3.png'
import study4 from '../assets/Images/study-4.png'
import study5 from '../assets/Images/study-5.png'
import study6 from '../assets/Images/study-6.png'
import study7 from '../assets/Images/study-7.png'
import study8 from '../assets/Images/study-8.png'
import study9 from '../assets/Images/study-9.png'
import study10 from '../assets/Images/study-10.png'
import study11 from '../assets/Images/study-11.png'
import study12 from '../assets/Images/study-12.png'
import study13 from '../assets/Images/study-13.png'
import study14 from '../assets/Images/study-14.png'

const Studies = () => {
  const images = [study1, study2, study3, study4, study5, study6, study7, study8, study9, study10, study11, study12, study13, study14]

  return (
    <div className='w-[70vw] mx-auto py-20 flex flex-col items-center'>
        <h2 className="text-center text-zinc-800 text-[33px] font-bold font-euclid leading-[43.20px]">Read case studies of partnership outcomes</h2>
        <p className="text-center text-zinc-800 text-lg font-light font-euclid pb-14">Get a glimpse of our partnership connections helped providers deliver better patient outcomes and sustainable practices.</p>

        <div className='grid grid-cols-5 grid-rows-4 gap-4 w-full h-screen'>
          {images.map(
            (img, index)=>{
              return(
                <img
                src={img}
                key={index}
                className={`
                ${index == 0 ? 'col-span-2 row-span-2 ':
                index == 13? 'col-span-2 row-span-2 col-start-4 row-start-3':null
              } 
                w-full h-full object-cover object-center border border-solid`}
                alt={`study-${index + 1}`}
                 />
              )
            }
          )}
        </div>
    </div>
  )
}

export default Studies