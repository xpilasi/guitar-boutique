import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const ProductList = () => {
  return (
    <div className=' mt-12 flex gap-x-8 gap-y-16 justify-between flex-wrap '>
        
        <Link
            className='w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]' //si se utiliza fill el parent tiene que ser relative 
            href='/test'>
                <div className='relative w-full h-80 '>
                <Image
                className='absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500'
                src='https://images.pexels.com/photos/18464648/pexels-photo-18464648/free-photo-of-taza-copa-beber-bebida.jpeg?auto=compress&cs=tinysrgb&w=400'
                alt=''
                fill
                sizes='25vw'
            />
            <Image
                className='absolute object-cover rounded-md'
                src='https://images.pexels.com/photos/327556/pexels-photo-327556.jpeg?auto=compress&cs=tinysrgb&w=400   '
                alt=''
                fill
                sizes='25vw'
            />
                </div>
                <div className='flex justify-between'>
                    <span className='font-medium'>Product Name</span>
                    <span className='font-semibold'>$49</span>
                </div>
                <div className='text-sm text-gray-500 '>
                    My description
                </div>
                <div>
                    <button 
                        className='rounded-2xl ring-1 ring-red-400 text-red-400 text-xs w-max py-2 px-4 hover:bg-red-400 hover:text-white'
                        >Add to Cart
                    </button>
                </div>
            
        </Link>
        <Link
            className='w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]' //si se utiliza fill el parent tiene que ser relative 
            href='/test'>
                <div className='relative w-full h-80 '>
                <Image
                className='absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500'
                src='https://images.pexels.com/photos/18464648/pexels-photo-18464648/free-photo-of-taza-copa-beber-bebida.jpeg?auto=compress&cs=tinysrgb&w=400'
                alt=''
                fill
                sizes='25vw'
            />
            <Image
                className='absolute object-cover rounded-md'
                src='https://images.pexels.com/photos/327556/pexels-photo-327556.jpeg?auto=compress&cs=tinysrgb&w=400   '
                alt=''
                fill
                sizes='25vw'
            />
                </div>
                <div className='flex justify-between'>
                    <span className='font-medium'>Product Name</span>
                    <span className='font-semibold'>$49</span>
                </div>
                <div className='text-sm text-gray-500 '>
                    My description
                </div>
                <div>
                    <button 
                        className='rounded-2xl ring-1 ring-red-400 text-red-400 text-xs w-max py-2 px-4 hover:bg-red-400 hover:text-white'
                        >Add to Cart
                    </button>
                </div>
            
        </Link>
        <Link
            className='w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]' //si se utiliza fill el parent tiene que ser relative 
            href='/test'>
                <div className='relative w-full h-80 '>
                <Image
                className='absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500'
                src='https://images.pexels.com/photos/18464648/pexels-photo-18464648/free-photo-of-taza-copa-beber-bebida.jpeg?auto=compress&cs=tinysrgb&w=400'
                alt=''
                fill
                sizes='25vw'
            />
            <Image
                className='absolute object-cover rounded-md'
                src='https://images.pexels.com/photos/327556/pexels-photo-327556.jpeg?auto=compress&cs=tinysrgb&w=400   '
                alt=''
                fill
                sizes='25vw'
            />
                </div>
                <div className='flex justify-between'>
                    <span className='font-medium'>Product Name</span>
                    <span className='font-semibold'>$49</span>
                </div>
                <div className='text-sm text-gray-500 '>
                    My description
                </div>
                <div>
                    <button 
                        className='rounded-2xl ring-1 ring-red-400 text-red-400 text-xs w-max py-2 px-4 hover:bg-red-400 hover:text-white'
                        >Add to Cart
                    </button>
                </div>
            
        </Link>
        <Link
            className='w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]' //si se utiliza fill el parent tiene que ser relative 
            href='/test'>
                <div className='relative w-full h-80 '>
                <Image
                className='absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500'
                src='https://images.pexels.com/photos/18464648/pexels-photo-18464648/free-photo-of-taza-copa-beber-bebida.jpeg?auto=compress&cs=tinysrgb&w=400'
                alt=''
                fill
                sizes='25vw'
            />
            <Image
                className='absolute object-cover rounded-md'
                src='https://images.pexels.com/photos/327556/pexels-photo-327556.jpeg?auto=compress&cs=tinysrgb&w=400   '
                alt=''
                fill
                sizes='25vw'
            />
                </div>
                <div className='flex justify-between'>
                    <span className='font-medium'>Product Name</span>
                    <span className='font-semibold'>$49</span>
                </div>
                <div className='text-sm text-gray-500 '>
                    My description
                </div>
                <div>
                    <button 
                        className='rounded-2xl ring-1 ring-red-400 text-red-400 text-xs w-max py-2 px-4 hover:bg-red-400 hover:text-white'
                        >Add to Cart
                    </button>
                </div>
            
        </Link>
    </div>
  )
}

export default ProductList