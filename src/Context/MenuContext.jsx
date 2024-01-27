import { createContext, useState } from "react";

export const MenuContext = createContext()

export const ContextProvider = ({children})=> {
    const [menuOpen, setMenu] = useState(false)
  const [dropdownOpen, setDropdown] = useState(false)
  const [dropdownOpen2,setDropdown2] = useState(false)
  const [toolsDropdown, setToolsDropdown] = useState(false)
  
  const [detail, setDetail] = useState(false)
  const [ViewDetail, setViewDetail] = useState(null)

  const [data, setdata] = useState({
    organisationName:'',
    email:'',
    address:'',
    ph_Number:'',

    Contact_name:'',
    Contact_email:'',
    Contact_address:'',
    Contact_phNumber:'',

    Partnership_model:'',
    Est_number_patients:'',
    Undecided: false,
    Payer:'',
    Payment_method:'',
    Additional_details:'',
})
    const [step, setStep] = useState(1)


    return(
        <MenuContext.Provider value={{menuOpen,setMenu,dropdownOpen,setDropdown,dropdownOpen2,setDropdown2, data, setdata, step, setStep,toolsDropdown, setToolsDropdown,detail, setDetail,ViewDetail, setViewDetail}}>
            {children}
        </MenuContext.Provider>
    )
}

export default ContextProvider