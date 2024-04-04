import React from 'react'
import Header from '../shared/header/Header'
import { Outlet } from 'react-router-dom'


const Home = () => {
  return (
    <div>
        <Header/>
        <Outlet/>
    </div>
  )
}

export default Home
