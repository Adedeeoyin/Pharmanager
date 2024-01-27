import React from 'react'
import { Field, ErrorMessage } from 'formik'

const FormikTextArea = ({name, label,className, ...rest}) => {
  return (
    <div className='flex flex-col gap-2 '>
        <label htmlFor={name}>{label}</label>
        <Field as='textarea' name={name} id={name} {...rest} className={`${className} border border-gray-200 p-2 outline-none`} />
        <ErrorMessage name={name}>
            {err => <div className='text-red-500'>{err}</div>}
        </ErrorMessage>
    </div>
  )
}

export default FormikTextArea