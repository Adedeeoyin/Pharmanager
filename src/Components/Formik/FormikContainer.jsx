import React, { useState, useContext } from 'react'
import { RegStep1, RegStep2, RegStep3, RegStep4 } from './partnershipRegStep'
import { MenuContext } from '../../Context/MenuContext'

const FormikContainer = () =>{ 
  const {step} = useContext(MenuContext)


  return (
   <div className={`w-[40vw] h-full mx-auto mt-20 bg-white ${step !== 4?'shadow border rounded-2xl py-20 px-20 border-sky-50':null}  font-euclid`}>
      {
        step == 1? <RegStep1 /> : step == 2? <RegStep2 />: step == 3 ? <RegStep3 /> : step == 4 ? <RegStep4 />:null
      }
   </div>
  )
}

export default FormikContainer