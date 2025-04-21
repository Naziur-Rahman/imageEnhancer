import React from 'react'
import ImagePreview from './imagePreview'
import ImageUpload from './imageUpload'
import { Outlet } from 'react-router-dom'
const Home = () => {
  return (
    <div>
      <ImagePreview></ImagePreview>
      <ImageUpload></ImageUpload>
    </div>
  )
}

export default Home
