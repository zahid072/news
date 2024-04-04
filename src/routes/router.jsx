import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import Root from '../layout/Root'
import Home from '../pages/Home/Home'
import SignIn from '../pages/auth/SignIn'
import SignUp from '../pages/auth/SignUp'

const router = createBrowserRouter([
    {
        path:"/",
        element:<Root></Root>,
        children:[
            {
                path:"/",
                element:<Home></Home>,
            },
        ]
    }, 
    {
        path:"/signIn",
        element:<SignIn/>,
      
    },
    {
        path:"/signUp",
        element:<SignUp/>,
      
    }
])

export default router
