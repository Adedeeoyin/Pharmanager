import React from 'react'
import { Field, ErrorMessage } from 'formik'

const FormikSelect = ({name,className,children, ...rest}) => {
  return (
    <div className='flex flex-col gap-2 '>
        <Field as='select' name={name} id={name} {...rest} className={`${className} border border-gray-200 p-2 outline-none`}>
            {children}
        </Field>
        <ErrorMessage name={name}>
            {err => <div className='text-red-500'>{err}</div>}
        </ErrorMessage>
    </div>
  )
}

export default FormikSelect