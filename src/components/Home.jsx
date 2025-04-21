import React from 'react'
import ImagePreview from './imagePreview'
import ImageUpload from './imageUpload'
import { Outlet } from 'react-router-dom'
const Home = () => {
  return (
    <div>
      <ImageUpload></ImageUpload>
      <ImagePreview></ImagePreview>
    </div>
  )
}

export default Home
