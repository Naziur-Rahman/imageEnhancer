import React from 'react'

const ImagePreview = () => {
  return (
    <div className='mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl '>
        {/* Original Image section */}
       <div className='bg-white shadow-lg rounded-xl overflow-hidden  '>
            <h1 className='text-center text-lg font-semibold bg-gray-800  text-white'>Original Image</h1>
            <img src='' className='w-full h-full object-cover'></img>
            <div className=' flex items-center pt-2 h-60 bg-gray-200'>
            No Image Selected
            </div>
       </div>
        {/* Enhanced  Image section */}
        <div className='bg-white shadow-lg rounded-xl overflow-hidden  '>
            <h1 className='text-center text-lg font-semibold bg-blue-800  text-white'>Enhanced Image</h1>
            <img src='' className='w-full h-full object-cover'></img>
            <div className=' flex items-center pt-2 h-60 bg-gray-200'>
            No Enhanced Image
            </div>
       </div>
    </div>
  )
}

export default ImagePreview
