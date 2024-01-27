import React, { useContext } from 'react'
import { ReactComponent as Profile} from '../assets/Images/profile-circle.svg'
import { ReactComponent as Logo} from '../assets/Images/Pharm-logo.svg'
import { ReactComponent as LiveChat} from '../assets/Images/chat-with.svg'
import { ReactComponent as PhoneCall} from '../assets/Images/talk-to.svg'
import Navbar from './Navbar'
import { HiOutlineMenu } from "react-icons/hi";
import { MenuContext } from '../Context/MenuContext'
import { useAuth } from '../Auth/AuthContext'
import { useNavigate } from 'react-router-dom'
import { IoApps } from "react-icons/io5";
import avatar from '../assets/Images/user-avatar--tools.png'
import { Tools_dropdown } from './Dropdown'

const Header = () => {
    const {menuOpen, setMenu, toolsDropdown,setToolsDropdown} = useContext(MenuContext)
    const auth = useAuth()
    const navigate = useNavigate()

    const handleLogin = ()=>{
        if(!auth.user){
            navigate('/login', {replace: true})
        }
    }

  return (
    <div className='fixed  top-0 left-0 w-full z-[9999]'>

        <div className='py-2 px-6 flex justify-between bg-sky-100 items-center'>
            <p className='w-[335.54px] h-[19px] text-zinc-800 text-xs font-normal font-[Inter] leading-[21px]'>We Guarantee 99.7% Satisfaction</p>

            {auth.user?
            <div className='flex items-center gap-8 text-gray-600 '>
                <div
                onClick={()=> setToolsDropdown(!toolsDropdown)}
                 className='flex relative gap-2 items-center text-base font-medium font-euclid cursor-pointer'>
                    <IoApps/>
                    <p>Tools</p>
                    <Tools_dropdown/>
                </div>
                <img
                className='w-8 object-cover'
                 src={avatar} 
                 alt="user-avatar" />
            </div>
            :<div
            onClick={handleLogin}
             className='flex items-center gap-[4px] cursor-pointer'>
                    <Profile />
                    <span className='text-zinc-800 text-xs font-medium font-euclid leading-tight'>My Account</span>
            </div>}
        </div>

    {/* second line start */}
        <div className='w-full flex justify-between shadow bg-white items-center pr-6 pl-[30px]'>
            <div className='flex items-center max-[1084px]:gap-8 gap-20 '>
                <Logo />
                <HiOutlineMenu
                onClick={()=> setMenu(!menuOpen) }
                 className={`${menuOpen?'max-[1084px]:hidden':'block'} hidden max-[1084px]:block text-zinc-800`}/>
                <Navbar/>  
            </div>

        <div className='flex max'>
            <div className='flex pr-[25px]'>
                <LiveChat/>
                <div className='flex flex-col'>
                    <p className='text-center text-sky-400 text-base font-semibold font-[Inter] leading-snug self-start'>Live Chat Now</p>
                    <span className='flex items-center gap-1'>
                        <i className='w-1.5 h-1.5 bg-green-500 rounded-full'>&nbsp;</i>
                        <p className='text-zinc-800 text-xs font-medium font-[Inter] leading-none'>Chat with an Expert</p>
                    </span>
                </div>
            </div>

            <div className='flex border-l border-[#E5E7EA] pl-[25px]'>
                 <PhoneCall/>
                 <div className='flex flex-col'>
                    <p className='text-center text-sky-400 text-base font-semibold font-[Inter] leading-snug self-start cursor-pointer'><a href="tel:+2348186281244"></a>08186281244</p>
                    <span className='flex items-center gap-1'>
                        <i className='w-1.5 h-1.5 bg-green-500 rounded-full'>&nbsp;</i>
                        <p className='text-zinc-800 text-xs font-medium font-[Inter] leading-none'>Talk to an Expert</p>
                    </span>
                </div> 
            </div>
        </div>

        </div>
    </div>
  )
}

export default Header