import React, {useContext} from 'react'
import { Formik, Form } from 'formik'
import FormikControl from './FormikControl'
import * as Yup from 'yup'
import { MenuContext } from '../../Context/MenuContext'
   
export const RegStep1 = () => {
    const {step, setStep,data, setdata,} = useContext(MenuContext)

    const handleNext = (newData, completed = false)=> {
      if(completed){
        return newData
      }
      setdata(prev => ({...prev, ...newData}))
      setStep(prev => prev + 1)
    }

    const validationSchema1 = Yup.object({
        organisationName: Yup.string().required('required!'),
        email: Yup.string().required('required!').email('invalid email!'),
        address: Yup.string().required('required!'),
        ph_Number: Yup.number().typeError('Invalid phone number!').required('required!'),
    })

    const onSubmit = (values) =>{
        handleNext(values)
    }

  return (
    <Formik 
     initialValues={data}
     validationSchema={validationSchema1}
     onSubmit={onSubmit}
    >
        {Formik =>
            <Form className='w-full flex gap-10 flex-col'>
                  <FormikControl control='input' type='text' name='organisationName' placeholder='Organization’s name' className='formikInput' />
                  <FormikControl control='input' type='text' name='email'  placeholder='Email address' className='formikInput'/>
                  <FormikControl control='input' type='text' name='address'  placeholder='Business address' className='formikInput'/>
                  <FormikControl control='input' type='text' name='ph_Number'  placeholder='Phone number' className='formikInput'/>  
                
                <div className='flex w-full gap-3'>
                    {step > 1 && 
                    <button
                     type='button'
                     onClick={()=> setStep(prev => prev -1)}
                      className={'w-1/2 text-sky-500 border-2 border-sky-500 py-1.5 cursor-pointer rounded-[4px] flex justify-center self-start  font-euclid'}>Back</button>}

                    <button
                     type='submit'
                      className={'w-1/2 text-white bg-sky-500 py-1.5 cursor-pointer rounded-[4px] flex justify-center self-start border border-sky-500 font-euclid'}>continue</button>
                </div>
            </Form>
            
        }
    </Formik>
  )
}

export const RegStep2 = () => {

    const {step, setStep,data, setdata,} = useContext(MenuContext)

    const handleNext = (newData, completed = false)=> {
      if(completed){
        return newData
      }
      setdata(prev => ({...prev, ...newData}))
      setStep(prev => prev + 1)
    }

     const validationSchema2 = Yup.object({ 
      Contact_name: Yup.string().required('required!'),
      Contact_email: Yup.string().required('required!').email('invalid email!'),
      Contact_address: Yup.string().required('required!'),
      Contact_phNumber: Yup.number().typeError('Invalid phone number!').required('required!'),
  })

    const onSubmit = (values) =>{
        handleNext(values)
    }

    return (
      <Formik 
       initialValues={data}
       validationSchema={validationSchema2}
       onSubmit={onSubmit}
      >
          {Formik =>
              <Form className='w-full flex gap-10 flex-col'>
                      <FormikControl control='input' type='text' name='Contact_name' placeholder='Contact person’s name' className='formikInput' />
                      <FormikControl control='input' type='text' name='Contact_email'  placeholder='Contact person’s email addresss' className='formikInput'/>
                      <FormikControl control='input' type='text' name='Contact_address'  placeholder='Contact person’s address' className='formikInput'/>
                      <FormikControl control='input' type='text' name='Contact_phNumber'  placeholder='Contact person’s phone number' className='formikInput'/>
                  
                  
                  <div className='flex w-full gap-3'>
                      {step > 1 && 
                      <button
                       type='button'
                       onClick={()=> setStep(prev => prev -1)}
                        className={'w-1/2 text-sky-500 border-2 border-sky-500 py-1.5 cursor-pointer rounded-[4px] flex justify-center self-start  font-euclid'}>Back</button>}
  
                      <button
                       type='submit'
                        className={'w-1/2 text-white bg-sky-500 py-1.5 cursor-pointer rounded-[4px] flex justify-center self-start border border-sky-500 font-euclid'}>continue</button>
                  </div>
                  
                  
              </Form>
              
          }
      </Formik>
    )
  }

  export const RegStep3 = () => {

    const {step, setStep,data, setdata,} = useContext(MenuContext)

    const handleNext = (newData, completed = false)=> {
      if(completed){
        return;
      }
      setdata(prev => ({...prev, ...newData}))
      setStep(prev => prev + 1)
    }

     const validationSchema3 = Yup.object({ 
        Partnership_model: Yup.string().required('pls select an option'),
        Est_number_patients:Yup.string().required('pls select an option'),
        Payer:Yup.string().required('pls select an option'),
        Payment_method:Yup.string().required('pls select an option'),
        Additional_details:Yup.string().required('leave a message'),
  })

    const onSubmit = (values, helpers) =>{
        handleNext(values)
        setdata(values)
    }

    return (
      <Formik 
       initialValues={data}
       validationSchema={validationSchema3}
       onSubmit={onSubmit}
      >
          {Formik =>
              <Form className='w-full flex gap-10 flex-col'>
                      <FormikControl control='select' name='Partnership_model' className='formikInput' >
                        <option value=" ">Partnership Model</option>
                        <option value="Patient care services">Patient care services</option>
                        <option value="Pratice management">Pratice management</option>
                        <option value="Research and Innovation">Research and Innovation</option>
                        <option value="Payer">Payer</option>
                        <option value="Support Services">Support Services</option>
                        <option value="Product Procurement">Product Procurement</option>
                        <option value="Investors">Investors</option>
                      </FormikControl>
                      <FormikControl control='select' name='Est_number_patients' className='formikInput'>
                        <option value=" ">Estimated number of patients</option>
                        <option value="1000-2000">1000-2000</option>
                      </FormikControl>
                      <FormikControl control='checkbox' label='Undecided' name='Undecided'/>
                      <FormikControl control='select' name='Payer'  placeholder='Payer?' className='formikInput'>
                        <option value=" ">Payer</option>
                        <option value="Payer">Payer</option>
                      </FormikControl>
                      <FormikControl control='select' name='Payment_method' className='formikInput'>
                        <option value=" ">Payment method</option>
                        <option value="Cash">Cash</option>
                        <option value="Bank Transfer">Bank Transfer</option>
                        <option value="Bitcoin">Bitcoin</option>
                      </FormikControl>
                      <FormikControl control='textarea' name='Additional_details' placeholder='Additional details' className='formikInput'>
                      </FormikControl>
                  
                  
                  <div className='flex w-full gap-3'>
                      {step > 1 && 
                      <button
                       type='button'
                       onClick={()=> setStep(prev => prev -1)}
                        className={'w-1/2 text-sky-500 border-2 border-sky-500 py-1.5 cursor-pointer rounded-[4px] flex justify-center self-start  font-euclid'}>Back</button>}
  
                      <button
                       type='submit'
                        className={'w-1/2 text-white bg-sky-500 py-1.5 cursor-pointer rounded-[4px] flex justify-center self-start border border-sky-500 font-euclid'}>continue</button>
                  </div>
                  
                  
              </Form>
              
          }
      </Formik>
    )
  }

  export const RegStep4 = () => {

    const {step, setStep,data, setdata,} = useContext(MenuContext)

    const handleNext = (newData, completed = false)=> {
      if(completed){
        return;
      }
      setdata(prev => ({...prev, ...newData}))
      setStep(prev => prev + 1)
    }


    const onSubmit = (values, helpers) =>{
        handleNext(values)
        setdata(values)
        console.log(data)
    }

    return (
      <Formik 
       initialValues={data}
       onSubmit={onSubmit}
      >
          {({values}) => {
            return(
              <Form className='flex flex-col gap-8 w-full h-full font-euclid'>
                <div>
                  <h2 className="text-black text-2xl font-medium mb-8">Business details</h2>
                  <div className='flex flex-col gap-8 bg-white rounded-2xl shadow border border-sky-50 p-4'>
                    <span className="flex gap-1 flex-col">
                      <h2 className="text-gray-600 text-base font-medium">Organization's name:</h2>
                      <p className=" text-black text-xl font-normal">{values.organisationName}</p>
                    </span>

                    <span className="flex gap-1 flex-col">
                      <h2 className="text-gray-600 text-base font-medium">Email adddress:</h2>
                      <p className=" text-black text-xl font-normal">{values.email}</p>
                    </span>

                    <span className="flex gap-1 flex-col">
                      <h2 className="text-gray-600 text-base font-medium">Business address:</h2>
                      <p className=" text-black text-xl font-normal">{values.address}</p>
                    </span>

                    <span className="flex gap-1 flex-col">
                      <h2 className="text-gray-600 text-base font-medium">Phone number:</h2>
                      <p className=" text-black text-xl font-normal">{values.ph_Number}</p>
                    </span>
                  </div>
                </div>

                <div>
                  <h2 className="text-black text-2xl font-medium mb-8">Contact person details</h2>
                  <div className='flex flex-col gap-8 bg-white rounded-2xl shadow border border-sky-50 p-4'>
                    <span className="flex gap-1 flex-col">
                      <h2 className="text-gray-600 text-base font-medium">Contact person's name:</h2>
                      <p className=" text-black text-xl font-normal">{values.Contact_name}</p>
                    </span>

                    <span className="flex gap-1 flex-col">
                      <h2 className="text-gray-600 text-base font-medium">Contact person's email address:</h2>
                      <p className=" text-black text-xl font-normal">{values.Contact_email}</p>
                    </span>

                    <span className="flex gap-1 flex-col">
                      <h2 className="text-gray-600 text-base font-medium">Contact person's address:</h2>
                      <p className=" text-black text-xl font-normal">{values.Contact_address}</p>
                    </span>

                    <span className="flex gap-1 flex-col">
                      <h2 className="text-gray-600 text-base font-medium">Contact person's phone number:</h2>
                      <p className=" text-black text-xl font-normal">{values.Contact_phNumber}</p>
                    </span>
                  </div>
                </div>

                <div>
                  <h2 className="text-black text-2xl font-medium mb-8">Partnership details</h2>
                  <div className='flex flex-col gap-8 bg-white rounded-2xl shadow border border-sky-50 p-4'>
                    <span className="flex gap-1 flex-col">
                      <h2 className="text-gray-600 text-base font-medium">partnership model:</h2>
                      <p className=" text-black text-xl font-normal">{values.Partnership_model}</p>
                    </span>

                    <span className="flex gap-1 flex-col">
                      <h2 className="text-gray-600 text-base font-medium">Estimated number of patients:</h2>
                      <p className=" text-black text-xl font-normal">{values.Est_number_patients}</p>
                    </span>

                    <span className="flex gap-1 flex-col">
                      <h2 className="text-gray-600 text-base font-medium">Payer:</h2>
                      <p className=" text-black text-xl font-normal">{values.Payer}</p>
                    </span>

                    <span className="flex gap-1 flex-col">
                      <h2 className="text-gray-600 text-base font-medium">Payment method:</h2>
                      <p className=" text-black text-xl font-normal">{values.Payment_method}</p>
                    </span>

                    <span className="flex gap-1 flex-col">
                      <h2 className="text-gray-600 text-base font-medium">Additional details:</h2>
                      <p className=" text-black text-xl font-normal">{values.Additional_details}</p>
                    </span>
                  </div>
                </div>

                <div className='flex w-full justify-between'>
                      {step > 1 && 
                      <button
                       type='button'
                       onClick={()=> setStep(prev => prev -1)}
                        className={' w-1/3 text-sky-500 border-2 border-sky-500 py-1.5 cursor-pointer rounded-[4px] flex justify-center self-start  font-euclid'}>Back</button>}
  
                      <button
                       type='submit'
                        className={'w-1/3 text-white bg-sky-500 py-1.5 cursor-pointer rounded-[4px] flex justify-center self-start border border-sky-500 font-euclid'}>continue</button>
                  </div>
              </Form>
              
            )
          }              
          }
      </Formik>
    )
  }