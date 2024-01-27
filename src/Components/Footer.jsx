import React from 'react'
import { ReactComponent as Logo } from '../assets/Images/Pharm-logo.svg'
import { ReactComponent as Location } from '../assets/Images/Location.svg'
import { ReactComponent as Call } from '../assets/Images/call.svg'
import { ReactComponent as Chat } from '../assets/Images/chat.svg'
import { ReactComponent as Email } from '../assets/Images/email.svg'
import { ReactComponent as Fb } from '../assets/Images/fb.svg'
import { ReactComponent as Twitter } from '../assets/Images/x.svg'
import { ReactComponent as Insta } from '../assets/Images/insta.svg'
import { ReactComponent as Likendln } from '../assets/Images/likendln.svg'
import { ReactComponent as Youtube } from '../assets/Images/youtube.svg'
import { ReactComponent as Tiktok } from '../assets/Images/tiktok.svg'
import { IoChatbubblesOutline } from "react-icons/io5";


const Footer = () => {
  return (
    <div className='w-[70vw] mx-auto mt-64 pb-80 pt-6 flex flex-col relative'>
        <div className='pt-10 flex flex-col gap-8 border-t border-b pb-4 border-gray-200 relative mb-28'>
        <span className='absolute -top-2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
            <Logo/>
        </span>
            <div className='flex justify-between max-[900px]:flex-wrap gap-8'>
                <ul className='flex flex-col gap-2'>
                    <li className="text-zinc-600 text-[15px] font-semibold font-euclid uppercase leading-[22.88px] tracking-wide">Products
                    </li>
                    <li className="footer-links"><a href="">Adult pain management</a>
                    </li>
                    <li className="footer-links"><a href="">Allergy Relief</a>
                    </li>
                    <li className="footer-links"><a href="">Asthma</a>
                    </li>
                    <li className="footer-links"><a href="">Cough and cold</a>
                    </li>
                    <li className="footer-links"><a href="">Diabetes medication</a>
                    </li>
                    <li className="footer-links"><a href="">All Products</a>
                    </li>
                </ul>
                
                <ul className='flex flex-col gap-2'>
                <li className="text-zinc-600 text-[15px] font-semibold font-euclid uppercase leading-[22.88px] tracking-wide">Services
                    </li>
                    <li className="footer-links"><a href="">Product sales</a>
                    </li>
                    <li className="footer-links"><a href="">Medical Help</a>
                    </li>
                    <li className="footer-links"><a href="">Medical Diagnose</a>
                    </li>
                    <li className="footer-links"><a href="">First aid kit</a>
                    </li>
                    <li className="footer-links"><a href="">sexual health</a>
                    </li>
                    <li className="footer-links"><a href="">All Products</a>
                    </li>
                </ul>

                <ul className='flex flex-col gap-2'>
                <li className="text-zinc-600 text-[15px] font-semibold font-euclid uppercase leading-[22.88px] tracking-wide">Help
                    </li>
                    <li className="footer-links"><a href="">Contact Support</a>
                    </li>
                    <li className="footer-links"><a href="">Satisfaction Guarantee</a>
                    </li>
                    <li className="footer-links"><a href="">Return Policy</a>
                    </li>
                    <li className="footer-links"><a href="">Shipping Options</a>
                    </li>
                    <li className="footer-links"><a href="">Pricing</a>
                    </li>
                    <li className="footer-links"><a href="">View All</a>
                    </li>
                </ul>

                <ul className='flex flex-col gap-2'>
                <li className="text-zinc-600 text-[15px] font-semibold font-euclid uppercase leading-[22.88px] tracking-wide">About
                    </li>
                    <li className="footer-links"><a href="">Health Tips</a>
                    </li>
                    <li className="footer-links"><a href="">Our Story</a>
                    </li>
                    <li className="footer-links"><a href="">Testimonials</a>
                    </li>
                    <li className="footer-links"><a href="">Blog</a>
                    </li>
                    <li className="footer-links"><a href="">Careers</a>
                    </li>
                    <li className="footer-links"><a href="">View All</a>
                    </li>
                </ul>

                <ul className='flex flex-col gap-2'>
                <li className="text-zinc-600 text-[15px] font-semibold font-euclid uppercase leading-[22.88px] tracking-wide">CONTACT
                    </li>
                    <li className='flex items-center gap-1'>
                        <i>
                            <Location/>
                        </i>
                            <p className="text-black text-opacity-50 text-sm font-normal font-euclid leading-[22.88px]">1223, address Lagos, <br/>Nigeria West Africa.
                            </p>
                    </li>
                    <li className='flex items-center gap-1'>
                        <i><Call/></i>
                        <p className="text-black text-opacity-50 text-sm font-normal font-['Inter'] leading-[22.88px]">Call 08186281244</p>
                    </li>
                    <li className='flex items-center gap-1'>
                        <i><Chat/></i>
                        <p className="text-black text-opacity-50 text-sm font-normal font-['Inter'] leading-[22.88px]">Chat With An Expert</p>
                    </li>
                    <li className='flex items-center gap-1'>
                        <i><Email/></i>
                        <p className="text-black text-opacity-50 text-sm font-normal font-['Inter'] leading-[22.88px]">Email Us</p>
                    </li>
                </ul>
            </div>

            <ul className='flex gap-4'>
                <li><Fb/></li>
                <li><Twitter/></li>
                <li><Insta/></li>
                <li><Likendln/></li>
                <li><Youtube/></li>
                <li><Tiktok/></li>
            </ul>
        </div>
        <div className="text-right text-black text-opacity-50 text-xs font-normal font-euclid leading-tight self-end">© Copyright 2023. All rights reserved.
        </div>
        <div className="flex gap-2 items-center bg-sky-400 p-2 self-end absolute bottom-56 right-5 text-white rounded-t-lg">
            <IoChatbubblesOutline/>
            <p className="text-center text-white text-xs font-normal font-['Inter']">Chat with an Expert</p>
        </div>

    </div>
  )
}

export default Footer