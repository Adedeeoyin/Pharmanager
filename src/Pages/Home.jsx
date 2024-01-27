import React, { useEffect, lazy, Suspense } from 'react'
import Hero from '../Components/Hero'
import HomeCategories from '../Components/HomeCategories'
import Studies from '../Components/Studies'
// import Payers from '../Components/Payers'
import Providers from '../Components/Providers'
import HowItWorks from '../Components/HowItWorks'
import AdvantagesShowcase from '../Components/AdvantagesShowcase'
import Testimony from '../Components/Testimony'
import { useLocation } from 'react-router-dom'
const Payers = lazy(()=> import('../Components/Payers'))

const Home = () => {
  const location = useLocation()
    useEffect(
        ()=>{
            window.scrollTo(0,0)
        },[location])

  return (
    <div className='mt-28'>
        <Hero/>
        <HomeCategories/>
        <Studies/>
        <Suspense fallback={<div>loading ...</div>}>
          <Payers/>
        </Suspense>
        
        <Providers/>
        <HowItWorks/>
        <AdvantagesShowcase/>
        <Testimony/>
    </div>
  )
}

export default Home