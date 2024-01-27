import React, {useEffect} from 'react'
import { GrPrevious } from "react-icons/gr";
import { ProfileCard1, ProfileCard2, ProfileCard3 } from '../../Components/ProfileCard';
import { useNavigate, useLocation } from 'react-router-dom';

const Hospital = () => {
    const results = ['ENT specialty','Orthopedic','Pediatric','Cardiology','Dentistry','Audiology','Gynaecology','Psychiatry','Neurology','Pulmonology','Epidemiology','Oncology',' Otolaryngology','Family Health','Public Health','Urology','Geriatric',' Dermatology','Ophthalmology','Nephrology','Podiatry','Gastroenterology','Hematology','Osteopath','Plastic surgery', 'Endocrinology']
    const navigate = useNavigate();
    const location = useLocation()

    useEffect(
        ()=>{
            window.scrollTo(0,0)
        },[location])

    const handleGoBack = () => {
      navigate(-1); // Go back one step in history
    }

  return (
    <div className='mt-40 mx-auto w-[70vw] justify-center flex flex-col'>
        <div onClick={handleGoBack} className='flex items-center gap-3 cursor-pointer'>
            <GrPrevious/>
            <p className="text-center text-neutral-600 text-lg font-normal font-euclid tracking-tight">Back to previous</p>
        </div>
        <h2 className="text-slate-900 pt-8 text-2xl font-medium font-euclid leading-[30px]">Hospitals in Lagos, Nigeria</h2>
        <p className="text-slate-600 text-base font-medium font-euclid leading-normal">304 Results</p>
        <div className='flex pt-8 items-center gap-3'>
            <h2 className="text-black text-2xl font-medium font-euclid leading-[30px]">Filter results</h2>
            <button className="text-sky-500 text-base font-medium font-euclid leading-normal">Clear filters</button>
        </div>
        <h3 className="text-black py-7 text-xl font-medium font-euclid leading-[30px]">Categories</h3>
        <div className='flex items-center gap-3 flex-wrap'>
            <h2 className="w-[111px] text-justify text-sky-500 text-base font-bold font-euclid leading-normal">All categories</h2>
                {results.map(
                    (item, i) => {
                        return(
                            <p className="text-nowrap cursor-pointer hover:text-black text-neutral-400 text-base font-medium font-euclid leading-normal" key={i}>{item}</p>
                        )
                    }
                )}
        </div>
        <div className='grid grid-cols-3 pt-20 gap-3'>
            <ProfileCard1/>
            <ProfileCard2/>
            <ProfileCard3/>
            <ProfileCard1/>
            <ProfileCard2/>
            <ProfileCard3/>
            <ProfileCard1/>
            <ProfileCard2/>
            <ProfileCard3/>
        </div>
    </div>
  )
}

export default Hospital