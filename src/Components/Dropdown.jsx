import React,{ useContext } from 'react'
import { Link } from 'react-router-dom'
import { MenuContext } from '../Context/MenuContext';
import { IoApps } from "react-icons/io5";

export const HeroDropdown = () => {
  const {dropdownOpen,setDropdown} = useContext(MenuContext)

  return (
    < >
        <div className='bg-white absolute top-16 text-nowrap shadow z-50 left-0 flex flex-col'>
            <Link className='home-dropdown' onClick={()=>setDropdown(!dropdownOpen)} to='/hospitals'>Hospitals</Link>
            <Link className='home-dropdown' onClick={()=>setDropdown(!dropdownOpen)} to='/laboratories'>Laboratories</Link>
            <Link className='home-dropdown' onClick={()=>setDropdown(!dropdownOpen)} to='/pharmacies'>Pharmacies</Link>
            <Link className='home-dropdown' onClick={()=>setDropdown(!dropdownOpen)} to='HMOs'>HMOs</Link>
            <Link className='home-dropdown' onClick={()=>setDropdown(!dropdownOpen)} to='/digital tools'>Digital Tools</Link>
            <Link className='home-dropdown' onClick={()=>setDropdown(!dropdownOpen)} to='/hardware and deeptech products'>Hardware and DeepTech Products</Link>
            <Link className='home-dropdown' onClick={()=>setDropdown(!dropdownOpen)} to='support services'>Support Services</Link>
            
        </div>
    </>
  )
}

export const Partnership_Dropdown = () => {
  const {dropdownOpen2,setDropdown2} = useContext(MenuContext)

  return (
    < >
        <div className='bg-white flex flex-col absolute top-10 text-nowrap shadow z-50 right-0'>
            <Link className='home-dropdown' onClick={()=>setDropdown2(!dropdownOpen2)} to='/hospitals'>Hospitals</Link>
            <Link className='home-dropdown' onClick={()=>setDropdown2(!dropdownOpen2)} to='/laboratories'>Laboratories</Link>
            <Link className='home-dropdown' onClick={()=>setDropdown2(!dropdownOpen2)} to='/pharmacies'>Pharmacies</Link>
            <Link className='home-dropdown' onClick={()=>setDropdown2(!dropdownOpen2)} to='HMOs'>HMOs</Link>
            <Link className='home-dropdown' onClick={()=>setDropdown2(!dropdownOpen2)} to='/digital tools'>Digital Tools</Link>
            <Link className='home-dropdown' onClick={()=>setDropdown2(!dropdownOpen2)} to='/hardware and deeptech products'>Hardware and DeepTech Products</Link>
            <Link className='home-dropdown' onClick={()=>setDropdown2(!dropdownOpen2)} to='support services'>Support Services</Link>
        </div>
    </>
  )
}

export const Tools_dropdown = ()=> {
    const { toolsDropdown,setToolsDropdown} = useContext(MenuContext)

    return (
      <div className={`${toolsDropdown?'flex flex-col': 'hidden'} bg-white absolute top-10 text-nowrap border border-gray-50 shadow z-50 right-0 text-gray-600 text-base font-medium `}>
            <Link className='home-dropdown flex items-center gap-3' onClick={()=>setToolsDropdown(!toolsDropdown)} to='/applications'>
              <IoApps/>
              <p>Applications</p>
            </Link>
            <Link className='home-dropdown flex items-center gap-3' onClick={()=>setToolsDropdown(!toolsDropdown)} to='/inbounds'>
              <IoApps/>
              <p>Inbounds</p>
            </Link>
            <Link className='home-dropdown flex items-center gap-3' onClick={()=>setToolsDropdown(!toolsDropdown)} to='/partners'>
              <IoApps/>
              <p>Partners</p>
            </Link>
            <Link className='home-dropdown flex items-center gap-3' onClick={()=>setToolsDropdown(!toolsDropdown)} to='/payments'>
              <IoApps/>
              <p>Payments</p>
            </Link>
        </div>
    )
}

export const Recent_Dropdown = ()=> {
  const {recentDropdown, setRecent} = useContext(MenuContext)
  return (
    <div className='bg-white flex flex-col absolute top-10 text-nowrap shadow z-50 left-0'>
      <div className='home-dropdown' onClick={()=>setRecent(!recentDropdown)}>A week ago</div>
      <div className='home-dropdown' onClick={()=>setRecent(!recentDropdown)}>A month ago</div>
      <div className='home-dropdown' onClick={()=>setRecent(!recentDropdown)}>3 month ago</div>
      <div className='home-dropdown' onClick={()=>setRecent(!recentDropdown)}>6 month ago</div>
      <div className='home-dropdown' onClick={()=>setRecent(!recentDropdown)}>A year ago</div>
    </div>
  )
}

export const DatePosted = ()=> {
  const {datePostedDropdown, setDatePosted} = useContext(MenuContext)
  return (
    <div className='bg-white flex flex-col absolute top-10 text-nowrap shadow z-50 left-0 p-2 font-euclid'>
      <div className='flex flex-col'>
        <label>From:</label>
        <input type="text" className='bg-gray-200 p-1 outline-none' placeholder='DD/ MM/ YY' />
      </div>
      <div className='flex flex-col'>
        <label>To:</label>
        <input type="text" className='bg-gray-200 p-1 outline-none' placeholder='DD/ MM/ YY' />
      </div>
    </div>
  )
}
// export default HeroDropdown