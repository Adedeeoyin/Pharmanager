import React, { useState } from 'react'
import { useAuth } from './AuthContext'
import { useNavigate, useLocation } from 'react-router-dom'

const Login = () => {
    const [user, setUser] = useState('')
    const auth = useAuth()
    const navigate = useNavigate()
    const location = useLocation()

    const redirectPath = location.state?.path || '/'

    const handleSubmit = (e)=> {
        e.preventDefault();
        auth.login(user);
         navigate(redirectPath, {replace: true} )
    }
    
  return (
    <div className='mt-40 w-[75vw] mx-auto'>
        <form className=' max-w-max mx-auto text-black bg-white flex flex-col gap-6 shadow-lg p-4 border border-gray-50'>
            <label className='flex flex-col gap-1' htmlFor="fullName">FullName:
            <input
            value={user}
            onChange={(e)=> setUser(e.target.value)}
            className='bg-white outline-none p-2 border border-gray-400'
             type="text" />
             </label>
             <button
             className='text-white py-2 bg-sky-600'
              onClick={handleSubmit}>Login</button>
        </form>

    </div>
  )
}

export default Login