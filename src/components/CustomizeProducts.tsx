import React from 'react'

const CustomizeProducts = () => {
  return (
    <div className='flex flex-col gap-6'>
        <h4 className='font-medium'>Choose a color</h4>
        <ul className='flex items-center gap-3'>
            <li className='w-8 h-8 rounded-full ring-1 ring-gray-300 cursor-pointer relative bg-red-400'>
                <div className='absolute w-10 h-10 rounded-full ring-2 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'></div>
            </li>
            <li className='w-8 h-8 rounded-full ring-1 ring-gray-300 cursor-pointer relative bg-blue-400'>
                
            </li>
            <li className='w-8 h-8 rounded-full ring-1 ring-gray-300 cursor-not-allowed relative bg-green-400'>
            <div className='absolute w-10 h-[2px] bg-red-400 rotate-45 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'></div>
            </li>
        </ul>
            
        <h4 className='font-medium'>Choose a size</h4>
        <ul className='flex items-center gap-3'>
            <li className='ring-1 ring-red-300 rounded-md text-red-300 py-1 px-4 text-sm cursor-pointer'>Small</li>
            <li className='ring-1 ring-red-300 rounded-md bg-red-400 text-white py-1 px-4 text-sm cursor-pointer'>Medium</li>
            <li className='ring-1 ring-pink-200 rounded-md bg-pink-200 text-white  py-1 px-4 text-sm cursor-not-allowed'>Large</li>
        </ul>
    </div>
  )
}

export default CustomizeProducts