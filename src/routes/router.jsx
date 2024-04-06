import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import Root from '../layout/Root'
import Home from '../pages/Home/Home'
import SignIn from '../pages/auth/SignIn'
import SignUp from '../pages/auth/SignUp'
import ErrorPage from '../pages/errorPage/ErrorPage'
import SingleNews from '../pages/singleNews/SingleNews'
import PrivateRoute from './PrivateRoute'


const router = createBrowserRouter([
    {
        path:"/",
        element:<Root></Root>,
        errorElement:<ErrorPage/>,
        children:[
            {
                path:"/category",
                element:<Home></Home>,
            },
            {
                path:"/signIn",
                element:<SignIn/>,
              
            },
            {
                path:"/signUp",
                element:<SignUp/>,
              
            },
            {
                path:"/category/:id",
                element:<Home/>, 
            },
            {
                path:"/news/:newsId",
                element:<PrivateRoute><SingleNews/></PrivateRoute>
            },
            
        ]
    }, 
    
    
])

export default router
