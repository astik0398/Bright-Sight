import React, { useContext } from 'react'
import { AuthContext } from './AuthContextProvider'
import { Navigate } from 'react-router-dom'

const PrivateRoute = (props) => {

    const {isAuth} = useContext(AuthContext)

    if(!isAuth){
        return <Navigate to='/login'/>
    }
  
    return props.children
}

export default PrivateRoute