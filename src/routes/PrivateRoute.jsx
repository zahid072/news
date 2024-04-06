import React, { useContext } from 'react'
import { AuthContext } from '../provider/AuthProvider'
import { Navigate, useLocation  } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();
    if(loading){
        return <img src="../../src/assets/loader.svg" alt="" />
    }

    if(user){
        return children
    }
  return <Navigate state={location.pathname} to={"/signIn"}></Navigate>
}

export default PrivateRoute
