import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../header/Header'
import Footer from '../footer/Footer'

const Root = () => {
  return (
   <>
      <div className='flex flex-col items-center justify-center min-h-screen bg-gray-100 py-8 px-4'>
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
      </div>
  </>
  )
}

export default Root
