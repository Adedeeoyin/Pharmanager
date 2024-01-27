import React from 'react'
import { Field, ErrorMessage } from 'formik'


export const FormikChecked = ({label,name, ...rest }) => {
  return (
    <div className='flex flex-col gap-2 '>
      <div className='flex items-center gap-2'>
        <Field {...rest} type='checkbox' name={name} />
        <label htmlFor={name}> {label}</label>
        </div>  
        <ErrorMessage name={name}>
            {err => <div className='text-red-500'>{err}</div>}
        </ErrorMessage>
    </div>
  )
}

const FormikInput = ({label, name,className, ...rest }) => {
  return (
    <div className='flex flex-col gap-2 '>
        <label htmlFor={name}>{label}</label>
        <Field name={name} id={name} {...rest} className={`${className} border border-gray-200 p-2 outline-none`} />
        <ErrorMessage name={name}>
            {err => <div className='text-red-500'>{err}</div>}
        </ErrorMessage>
    </div>
  )
}

export default FormikInput