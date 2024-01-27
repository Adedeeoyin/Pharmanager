import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { IoClose } from "react-icons/io5";
import { MenuContext } from '../Context/MenuContext';

const Navbar = () => {
  const {menuOpen, setMenu} = useContext(MenuContext)

  return (
    <nav className={`${menuOpen?'flex':'max-[1084px]:hidden'} flex max-[1084px]:flex-col  max-[1084px]:bg-white max-[1084px]:fixed max-[1084px]:top-36 max-[1084px]:shadow transition duration-1000 max-[1084px]:w-1/4 max-[1084px]:items-center max-[1084px]:py-20`}>
        <span className='hidden max-[1084px]:block absolute top-2 left-2'>
          <IoClose
          onClick={()=> setMenu(!menuOpen)}
          className='text-zinc-800'
           />
        </span>
        <div className='flex max-[1084px]:flex-col gap-6 max-[1084px]:items-start text-zinc-800 text-sm font-medium font-euclid'>
          <NavLink onClick={()=> setMenu(!menuOpen) } className={({isActive}) => isActive? 'navActive':''} to='/'>Home
        </NavLink>
        <NavLink onClick={()=> setMenu(!menuOpen) } className={({isActive}) => isActive? 'navActive':''} to='/Categories'>Categories
        </NavLink>
        <NavLink onClick={()=> setMenu(!menuOpen) } className={({isActive}) => isActive? 'navActive':''} to='/Partnership requests'>Partnership requests
        </NavLink>
        <NavLink onClick={()=> setMenu(!menuOpen) } className={({isActive}) => isActive? 'navActive':''} to='/Help'>Help
        </NavLink>
        <NavLink onClick={()=> setMenu(!menuOpen) } className={({isActive}) => isActive? 'navActive':''} to='/FAQs'>FAQs
        </NavLink>
        <NavLink onClick={()=> setMenu(!menuOpen) } className={({isActive}) => isActive? 'navActive':''} to='/About'>About
        </NavLink>
        </div>
        
    </nav>
  )
}

export default Navbar