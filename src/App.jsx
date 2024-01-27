import React, { useState } from 'react';
import Header from './Components/Header';
import { Routes,Route,} from 'react-router-dom';
import Home from './Pages/Home';
import NotFound from './Pages/NotFound';
import Categories from './Pages/Categories';
import Help from './Pages/Help';
import Faqs from './Pages/Faqs';
import Partnership from './Pages/Partnership'
import About from './Pages/About';
import Footer from './Components/Footer';
import  ContextProvider  from './Context/MenuContext';
import Hospital from './Pages/dropdownPage/Hospital';
import Laboratories from './Pages/dropdownPage/Laboratories';
import Pharmacies from './Pages/dropdownPage/Pharmacies';
import HMOs from './Pages/dropdownPage/HMOs';
import Digital_tools from './Pages/dropdownPage/Digital_tools';
import Hardware from './Pages/dropdownPage/Hardware';
import Support_services from './Pages/dropdownPage/Support_services';
import Profile_1 from './Pages/Profile/Profile_1';
import Partnership_Request from './Pages/Profile/Partnership_Request';
import Login from './Auth/Login';
import AuthContext from './Auth/AuthContext';
import RequireAuth from './Auth/RequireAuth';
import Inbounds from './Pages/Tools/Inbounds';
import Applications from './Pages/Tools/Applications';
import Payments from './Pages/Tools/Payments';
import Partners_Tools from './Pages/Tools/Partners_Tools';



function App() {
 

  return (
      <>
      <AuthContext>
        <ContextProvider >
          <Header/>

          <Routes>
            
            <Route index element={<Home/>}/>
            <Route path='/Categories' element={<Categories/>}/>
            <Route path='/Partnership requests' element={<Partnership/>}/>
            <Route path='/Help' element={<Help/>}/>
            <Route path='/FAQs' element={<Faqs/>}/>
            <Route path='/About' element={<About/>}/>
            <Route path='*' element={<NotFound/>}/>

            <Route path='/hospitals' element={<Hospital/>}/>
            <Route path='/laboratories' element={<Laboratories/>}/>
            <Route path='/pharmacies' element={<Pharmacies/>}/>
            <Route path='/HMOs' element={<HMOs/>}/>
            <Route path='/digital tools' element={<Digital_tools/>}/>
            <Route path='/hardware and deepTech products' element={<Hardware/>}/>
            <Route path='/support services' element={<Support_services/>}/>

            <Route path='/profile-1' element={<Profile_1/>} />
            <Route path='/partnership-request' 
            element={<RequireAuth><Partnership_Request/></RequireAuth>} />

            <Route path='/login' element={<Login/>} />

            <Route path='/inbounds' element={<Inbounds/>} />
            <Route path='/applications' element={<Applications/>} />
            <Route path='/payments' element={<Payments/>} />
            <Route path='/partners' element={<Partners_Tools/>} />

          </Routes>
          <Footer/>
          </ContextProvider>
        </AuthContext>
      </>
  )
}

export default App
