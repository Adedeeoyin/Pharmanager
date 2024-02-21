import React, { useContext, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import profile1_bg from '../../assets/Images/profile1-bg.png'
import p1_avatar from '../../assets/Images/p1-avatar.png'
import { CiLocationOn } from "react-icons/ci";
import Button from '../../Components/Button';
import { CiPhone } from "react-icons/ci";
import { ReactComponent as Sms } from '../../assets/Images/sms.svg';
import Rating from '../../Components/Rating';
import service1 from '../../assets/Images/p1-service1.png'
import service2 from '../../assets/Images/p1-service2.png'
import service3 from '../../assets/Images/p1-service3.png'
import service4 from '../../assets/Images/p1-service4.png'
import gallery1 from '../../assets/Images/p1-gallery1.png'
import gallery2 from '../../assets/Images/p1-gallery2.png'
import gallery3 from '../../assets/Images/p1-gallery3.png'
import gallery4 from '../../assets/Images/p1-gallery4.png'
import gallery5 from '../../assets/Images/p1-gallery5.png'
import gallery6 from '../../assets/Images/p1-gallery6.png'
import { MenuContext } from '../../Context/MenuContext';

const Profile_1 = () => {
    const location = useLocation()
    const {setDetail} = useContext(MenuContext)
    useEffect(
        ()=>{
            window.scrollTo(0,0)
        },[location])

        const specialization = ['Family Health', 'Dentistry', 'Pediatric', 'Urology', 'Ophthalmology']
        const services = [{img: service1, title: 'Inpatient care'}, {img: service2, title: 'Oncology'}, {img: service3, title: 'Urology'}, {img: service4, title: 'Ophthalmology'}]
        const reviews = ['communication', 'Quality of service', 'Professionalism', 'flexibility', 'Creativity']
        const gallery = [{img: gallery1,alt:'gallery-1'},{img: gallery2,alt:'gallery-2'},{img: gallery3,alt:'gallery-3'},{img: gallery4,alt:'gallery-4'},{img: gallery5,alt:'gallery-5'},{img: gallery6,alt:'gallery-6'}]
        const reviews_Lg = [
          {rating: 4,title: 'Patient care', time: 'Adeola reviewed on 19 Jun 2023', content: "I had the pleasure of working with Amanda as an event planner and I highly recommend her services. Amanda's attention to detail, organization huhuhuhu..."},
          {rating: 4,title: 'Outdoor service', time: 'Adeola reviewed on 19 Jun 2023', content: "I had the pleasure of working with Amanda as an event planner and I highly recommend her services. Amanda's attention to detail, organization huhuhuhu..."},
          {rating: 4,title: 'Emergency situation', time: 'Adeola reviewed on 19 Jun 2023', content: "I had the pleasure of working with Amanda as an event planner and I highly recommend her services. Amanda's attention to detail, organization huhuhuhu..."},
          {rating: 4,title: 'Midnight services', time: 'Adeola reviewed on 19 Jun 2023', content: "I had the pleasure of working with Amanda as an event planner and I highly recommend her services. Amanda's attention to detail, organization huhuhuhu..."},
        ]

  return (
    <div className='mt-40 mx-auto w-[70vw] '>
      <div className='relative w-full'>
        <img
        className='w-full object-cover object-center'
         src={profile1_bg}
          alt="" />

          <div className='absolute w-[60vw] left-1/2 -translate-x-1/2 flex items-center justify-between -bottom-20 mx-auto'>
              <img
             src={p1_avatar}
             className='w-28 absolute -top-10'
              alt="" />

              <div className='flex flex-col gap-2 pl-32'>
                <h2 className="text-slate-900 text-2xl font-medium font-euclid leading-[30px]">Karmen Medicals</h2>
                <div className='flex gap-6'>
                  <span className='px-4 py-1 bg-blue-200 rounded-lg border border-sky-500 text-sky-500 text-sm font-medium font-euclid'>Hospital</span>
                  <div className='flex items-center gap-2 text-gray-600'><span><CiLocationOn/></span>Lagos,Nigeria</div>
                </div>
            </div>

            <div className='justify-self-end flex items-center gap-4'>
              <p className='text-gray-600 text-base font-euclid text-nowrap'>Replies within:<span className='text-sky-500'> 5 hours</span></p>
              <Button.Square_sm_Link
              onClick={()=> setDetail(false)}
               to={'/partnership-request'}  extraClass={'px-5 py-2 text-white bg-sky-600'}>Request partnership</Button.Square_sm_Link>
            </div>
            
          </div>
      </div>

      <section className='w-[60vw] mx-auto mt-32'>

          <div className='w-full h-full flex  gap-10 p-2'>
              <div className='w-3/4 justify-between flex flex-col '>
                <div className=''>
                  <h2 className="text-slate-900 text-xl font-medium font-euclid leading-[30px]">About</h2>
                  <p className="text-slate-900 max-w-[840px] text-base font-normal font-euclid mt-2">Dorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis. Ut commodo efficitur neque. Ut diam quam, semper iaculis condimentum ac, vestibulum eu nisl</p>
                </div>
                <div className=''>
                  <h2 className="text-slate-900 text-xl font-medium font-euclid leading-[30px]">Specialization</h2>
                  <div className='flex gap-3 items-center flex-wrap mt-2'>
                    {specialization.map(
                      (sp, index)=>{
                        return(
                          <div key={index} className='px-4 text-nowrap py-1 rounded-lg border border-sky-500 text-center text-sky-500 text-base font-medium font-euclid'>
                            {sp}
                          </div>
                        )
                      }
                    )}
                  </div>
                </div>
              </div>

              <div className='w-1/4 justify-between flex flex-col h-full'>
                <h2 className="text-slate-900 text-lg font-medium font-euclid leading-[30px] text-nowrap">Contact Information</h2>
                <div className=' flex flex-col gap-4 mt-4 font-euclid font-medium text-gray-600 text-base'>
                  <span className='flex justify-between items-center'>Phone number <CiPhone className='text-sky-500'/></span>
                  <span className='flex justify-between items-center'>Email <Sms className='text-sky-500'/></span>
                  <span className='flex justify-between items-center'>Website <Sms className='text-sky-500'/></span>
                </div>
                <div className='flex flex-col gap-2 mt-[100%]'>
                  <h2 className="text-slate-900 text-xl font-medium font-euclid leading-[30px]">Overall Rating</h2>
                  <Rating rating={4} text={4.8}/>
                </div>
              </div>
          </div>

          <div className='w-full mt-20'>
            <h2 className="text-slate-900 text-[32px] font-medium font-euclid leading-10">Product and Services</h2>
            <div className='grid grid-cols-4 gap-4 mt-10'>
              {services.map(
                (service, index)=>{
                  return(
                    <div key={index} className='flex flex-col gap-3'>
                      <img src={service.img} alt={service.title}  className='object-cover object-center'/>
                      <h3 className="text-slate-900 text-xl font-semibold font-euclid leading-[30px]">{service.title}</h3>
                    </div>
                  )
                }
              )}
            </div>
          </div>

          <div className='w-full mt-20'>
            <div className='flex justify-between items-center'>
            <h2 className="text-slate-900 text-[32px] font-medium font-euclid leading-10">Reviews <span>(449)</span></h2>
                <button className="text-sky-500 text-base font-medium font-euclid px-5 py-4 rounded-lg border-2 border-sky-500">Write a review</button>
            </div>
            <div className='flex flex-wrap items-center gap-4 mt-10 font-euclid'>
              <div className='flex flex-col items-center px-4 py-2 rounded-lg border border-gray-600'>
                <span className="text-slate-900 text-[32px] font-medium leading-10">4.6</span>
                <Rating rating={4}/>
                <p className="w-[106px] text-center text-gray-600 text-base font-medium ">449 ratings</p>
              </div>
              {reviews.map(
                (review, index)=>{
                  return(
                    <div key={index} className='flex flex-col items-center justify-center px-4 py-2 bg-stone-50 rounded-lg'>
                <span className="text-slate-900 text-xl font-normal leading-[30px]">{review}</span>
                <Rating rating={4} text={4.8}/>
              </div>
                  )
                }
              )}
            </div>
          </div>

          <div className='w-full mt-20'>
            <h2 className="text-slate-900 text-[32px] font-medium font-euclid leading-10">Gallery</h2>
            <div className='grid grid-cols-6 gap-4 mt-10'>
              {gallery.map(
                (item, index)=>{
                  return(
                    <div key={index}>
                      <img src={item.img} alt={item.alt}  className='object-cover object-center'/>
                    </div>
                  )
                }
              )}
            </div>
          </div>

          <div className='w-full mt-20 font-euclid'>
            <div className='flex justify-between items-center'>
            <div className='flex items-center gap-4'>
            <h2 className="text-slate-600 text-xl font-normal leading-[25px]">Sort by:</h2>
                <select name="" id="" className='outline-none text-slate-900 text-xl cursor-pointer'>
                  <option value="Highest rating">Highest rating</option>
                </select>
            </div>
            <span className="text-sky-500 text-xl font-normal cursor-pointer leading-[30px]">View more reviews</span>
            </div>

            <div className='flex flex-wrap gap-4 mt-10'>
              {reviews_Lg.map(
                (review, index)=>{
                  return(
                    <div key={index} className="w-[295px] h-[264px] p-5 bg-stone-50 rounded-lg border border-neutral-300 flex flex-col justify-center items-start gap-5">
                      <Rating rating={review.rating}/>
                      <h2 className=" text-slate-900 text-base font-semibold">{review.title}</h2>
                      <h3 className=" text-gray-600 text-base font-medium ">{review.time}</h3>
                      <p className="text-slate-900 text-base font-normal">{review.content}<span className='text-sky-500'>Read all</span></p>
                    </div>
                  )
                }
              )}
            </div>
          </div>

      </section>
        
    </div>
  )
}

export default Profile_1