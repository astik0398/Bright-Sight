import React, { useState } from 'react'
import { createContext } from 'react'

export const AuthContext = createContext()

const AuthContextProvider = ({children}) => {

  const [isAuth, setIsauth] = useState(false)
  const [token, setToken] = useState(null)

  function login(token){
    setIsauth(true)
    setToken(token)
  }

  function logout(){
    setIsauth(false)
    setToken(null)
  }

  return (
    <div>

      <AuthContext.Provider value={{isAuth, login, logout, token}}>

        {children}

      </AuthContext.Provider>
    </div>
  )
}

export default AuthContextProvider