import React from 'react'

const ImageUpload = () => {
  return (
    <div className='bg-white shadow-lg rounded-2xl p-6 w-full max-w-2xl'>
     <label htmlFor='fileInput'  className='block w-full cursor-pointer border-2 border-dashed border-gray-300 rounded-lg p-y text-center hover:border-blue-500 transition-all'>
        <input type='file' id='fileInput' className='hidden'></input>
        <p className="p-2 text-lg font-medium text-gray-600"> Click or Drag and Drop  your image here</p>
     </label>
    </div>
  )
}

export default ImageUpload
