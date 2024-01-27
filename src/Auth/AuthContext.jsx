import React,{ createContext, useContext, useState} from 'react'

const AuthCont = createContext()

const AuthContext = ({children}) => {
    const [user, setUser] = useState(null)

    const login = (user)=> {
        setUser(user)
    }

    const logout = ()=> {
        setUser(null)
    }


  return (
    <AuthCont.Provider value={{user, login, logout}}>
        {children}
    </AuthCont.Provider>
  )
}

export const useAuth = ()=> {
    return useContext(AuthCont)
}

export default AuthContext