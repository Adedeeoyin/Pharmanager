import React from 'react'
import { ReactComponent as Delivery } from '../assets/Images/fast-delivery.svg'
import { ReactComponent as Pricing } from '../assets/Images/pricing.svg'
import { ReactComponent as Satisfy } from '../assets/Images/satisfactory.svg'
import { ReactComponent as Incall } from '../assets/Images/incall.svg'

const AdvantagesShowcase = () => {
  return (
    <div className='mx-auto w-[70vw] pt-44 flex flex-col justify-center'>
      <div className='border-t-4 border-sky-400 w-full shadow'>
        <h2 className="text-center text-zinc-800 text-[33px] font-bold font-euclid mt-8 leading-[43.20px]">Your Business deserves the Best
        </h2>
        <p  className="text-center text-zinc-800 text-lg font-light font-euclid mb-10">Why so many choose to buy from us.
        </p>

       <div className='w-full border-t border-gray-200'></div>
        <div className='w-full grid grid-cols-4 h-1/4 pt-10 pb-20'>
            <div className="flex flex-col items-center border-r">
                <Delivery/>
                <h2 className="text-center text-zinc-800 text-sm font-semibold font-euclid leading-snug">FAST RUSH DELIVERY
                </h2>
                <p className="text-center text-zinc-800 text-xs font-light font-euclid leading-[30px]">Our pharmacy partners deliver inbound requests within 24hrs to prioritize your well-being.
                </p>
            </div>

            <div className="flex flex-col items-center border-r">
                <Pricing/>
                <h2 className="text-center text-zinc-800 text-sm font-semibold font-euclid leading-snug">BETTER PRICING
                </h2>
                <p className="text-center text-zinc-800 text-xs font-light font-euclid leading-[30px]">We allow you compare prices across various pharmacies within and outside your location to help with decision making.
                </p>
            </div>

            <div className="flex flex-col items-center border-r">
                <Satisfy/>
                <h2 className="text-center text-zinc-800 text-sm font-semibold font-euclid leading-snug">INDUSTRY LEADING SATISFACTION GUARANTEE
                </h2>
                <p className="text-center text-zinc-800 text-xs font-light font-euclid leading-[30px]">Our pharmacy parties follow the best practices from procurement to handling and dispatch. Read more on our guarantees to you.
                </p>
            </div>

            <div className="flex flex-col items-center">
                <Incall/>
                <h2 className="text-center text-zinc-800 text-sm font-semibold font-euclid leading-snug">IN CALL SERVICE
                </h2>
                <p className="text-center text-zinc-800 text-xs font-light font-euclid leading-[30px]">We allow pre-sales and post sales advisory and feedback to improve value offerings to both pharmacies and drug buyers.
                </p>
            </div>
        </div>
        </div>
    </div>
  )
}

export default AdvantagesShowcase