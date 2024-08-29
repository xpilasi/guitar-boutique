import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const CategoryList = () => {
  return (
    <div className='px-4 overflow-x-scroll scrollbar-hide'>
      <div className='flex gap-4 md:gap-8'>
        <Link
              className='flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6'
              href='/list?cat=test'
          >
              <div className='relative bg-slate-100 w-full h-96'>
                  <Image
                      className='object-cover rounded-md'
                      src='https://images.unsplash.com/photo-1614440455519-7d2d00f6a701?q=80&w=1364&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                      alt=''
                      fill
                      />

              </div> 
              <h1 className='mt-8 font-light text-xl tracking-widest  flex justify-center'>Guitar Pedals</h1> 
          </Link>
          <Link
              className='flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6'
              href='/list?cat=test'
          >
              <div className='relative bg-slate-100 w-full h-96'>
                  <Image
                      className='object-cover rounded-md'
                      src='https://images.unsplash.com/photo-1634691054625-87910c581bb1?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                      alt=''
                      fill
                      />

              </div> 
              <h1 className='mt-8 font-light text-xl tracking-widest  flex justify-center'>Bass Pedals</h1> 
          </Link>
        <Link
              className='flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6'
              href='/list?cat=test'
          >
              <div className='relative bg-slate-100 w-full h-96'>
                  <Image
                      className='object-cover rounded-md'
                      src='https://images.unsplash.com/photo-1621173404040-3d677039f33d?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                      alt=''
                      fill
                      />

              </div> 
              <h1 className='mt-8 font-light text-xl tracking-widest  flex justify-center'>Picks</h1> 
          </Link>
          <Link
              className='flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6'
              href='/list?cat=test'
          >
              <div className='relative bg-slate-100 w-full h-96'>
                  <Image
                      className='object-cover rounded-md'
                      src='https://images.unsplash.com/photo-1615290642832-0e0995702507?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                      alt=''
                      fill
                      />

              </div> 
              <h1 className='mt-8 font-light text-xl tracking-widest  flex justify-center'>Pedalboards</h1> 
          </Link>
       
        
        <Link
              className='flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6'
              href='/list?cat=test'
          >
              <div className='relative bg-slate-100 w-full h-96'>
                  <Image
                      className='object-cover rounded-md'
                      src='https://images.unsplash.com/photo-1463134443644-45f4dc57a612?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                      alt=''
                      fill
                      />

              </div> 
              <h1 className='mt-8 font-light text-xl tracking-widest  flex justify-center'>Guitar amplifiers</h1> 
          </Link>
        <Link
              className='flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6'
              href='/list?cat=test'
          >
              <div className='relative bg-slate-100 w-full h-96'>
                  <Image
                      className='object-cover rounded-md'
                      src='https://images.unsplash.com/photo-1588599376442-3cbf9c67449e?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                      alt=''
                      fill
                      />

              </div> 
              <h1 className='mt-8 font-light text-xl tracking-widest  flex justify-center'>Bass amplifiers</h1> 
          </Link>
        
        
      </div>
        
    </div>
  )
}

export default CategoryList