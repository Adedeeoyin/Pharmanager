import React, { useContext } from 'react'
import { MenuContext } from '../Context/MenuContext'
import { useNavigate } from 'react-router-dom'

const Partnership_details = () => {
    const {setDetail} = useContext(MenuContext)
    const navigate = useNavigate()

  return (
    <div className='flex flex-col gap-8 w-[35vw] mx-auto font-euclid mt-28'>

                  <h2 className="text-blue-800 text-nowrap text-[35px] font-semibold leading-[50px]">View partner application</h2>
                  <p className="w-[33vw] text-gray-600 text-xl leading-[30px]">The event personnel will evaluate this request based on the information provided.</p>
                <div>
                  <h3 className="text-black mb-8 text-2xl font-medium leading-[30px]">Business details</h3>
                  <div className='flex flex-col gap-8 bg-white rounded-2xl shadow border border-sky-50 p-4'>
                    <span className="flex gap-1 flex-col">
                      <h2 className="text-gray-600 text-base font-medium">Organization's name:</h2>
                      <p className=" text-black text-xl font-normal">values</p>
                    </span>

                    <span className="flex gap-1 flex-col">
                      <h2 className="text-gray-600 text-base font-medium">Email adddress:</h2>
                      <p className=" text-black text-xl font-normal">values</p>
                    </span>

                    <span className="flex gap-1 flex-col">
                      <h2 className="text-gray-600 text-base font-medium">Business address:</h2>
                      <p className=" text-black text-xl font-normal">values</p>
                    </span>

                    <span className="flex gap-1 flex-col">
                      <h2 className="text-gray-600 text-base font-medium">Phone number:</h2>
                      <p className=" text-black text-xl font-normal">values</p>
                    </span>
                  </div>
                </div>

                <div>
                  <h2 className="text-black text-2xl font-medium mb-8">Contact person details</h2>
                  <div className='flex flex-col gap-8 bg-white rounded-2xl shadow border border-sky-50 p-4'>
                    <span className="flex gap-1 flex-col">
                      <h2 className="text-gray-600 text-base font-medium">Contact person's name:</h2>
                      <p className=" text-black text-xl font-normal">values</p>
                    </span>

                    <span className="flex gap-1 flex-col">
                      <h2 className="text-gray-600 text-base font-medium">Contact person's email address:</h2>
                      <p className=" text-black text-xl font-normal">values</p>
                    </span>

                    <span className="flex gap-1 flex-col">
                      <h2 className="text-gray-600 text-base font-medium">Contact person's address:</h2>
                      <p className=" text-black text-xl font-normal">values</p>
                    </span>

                    <span className="flex gap-1 flex-col">
                      <h2 className="text-gray-600 text-base font-medium">Contact person's phone number:</h2>
                      <p className=" text-black text-xl font-normal">values</p>
                    </span>
                  </div>
                </div>

                <div>
                  <h2 className="text-black text-2xl font-medium mb-8">Partnership details</h2>
                  <div className='flex flex-col gap-8 bg-white rounded-2xl shadow border border-sky-50 p-4'>
                    <span className="flex gap-1 flex-col">
                      <h2 className="text-gray-600 text-base font-medium">partnership model:</h2>
                      <p className=" text-black text-xl font-normal">values</p>
                    </span>

                    <span className="flex gap-1 flex-col">
                      <h2 className="text-gray-600 text-base font-medium">Estimated number of patients:</h2>
                      <p className=" text-black text-xl font-normal">values</p>
                    </span>

                    <span className="flex gap-1 flex-col">
                      <h2 className="text-gray-600 text-base font-medium">Payer:</h2>
                      <p className=" text-black text-xl font-normal">values</p>
                    </span>

                    <span className="flex gap-1 flex-col">
                      <h2 className="text-gray-600 text-base font-medium">Payment method:</h2>
                      <p className=" text-black text-xl font-normal">values</p>
                    </span>

                    <span className="flex gap-1 flex-col">
                      <h2 className="text-gray-600 text-base font-medium">Additional details:</h2>
                      <p className=" text-black text-xl font-normal">values</p>
                    </span>
                  </div>
                </div>

                <button 
                onClick={()=> {navigate(-1);setDetail(false)}}
                className='w-full bg-sky-500 text-center py-3.5 text-white text-base font-medium rounded-lg'>Close section</button>

    </div>
  )
}

export default Partnership_details