
import React, { useEffect } from 'react'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'

const Root = () => {
    const location = useLocation();
    const navigate = useNavigate();
useEffect(() => {
    
    if(location.pathname === "/"){
        navigate("/category")
    }
}, []);
  return (
    <>
     <div className='max-w-6xl md:mx-auto mx-2'>
     <Outlet/>
     </div>
    </>
  )
}

export default Root
