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
                      src='https://images.pexels.com/photos/167491/pexels-photo-167491.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                      alt=''
                      fill
                      />

              </div> 
              <h1 className='mt-8 font-light text-cl tracking-wide'>Category Name</h1> 
          </Link>
        <Link
              className='flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6'
              href='/list?cat=test'
          >
              <div className='relative bg-slate-100 w-full h-96'>
                  <Image
                      className='object-cover rounded-md'
                      src='https://images.pexels.com/photos/4218027/pexels-photo-4218027.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                      alt=''
                      fill
                      />

              </div> 
              <h1 className='mt-8 font-light text-cl tracking-wide'>Category Name</h1> 
          </Link>
        <Link
              className='flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6'
              href='/list?cat=test'
          >
              <div className='relative bg-slate-100 w-full h-96'>
                  <Image
                      className='object-cover rounded-md'
                      src='https://images.pexels.com/photos/3587478/pexels-photo-3587478.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                      alt=''
                      fill
                      />

              </div> 
              <h1 className='mt-8 font-light text-cl tracking-wide'>Category Name</h1> 
          </Link>
        <Link
              className='flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6'
              href='/list?cat=test'
          >
              <div className='relative bg-slate-100 w-full h-96'>
                  <Image
                      className='object-cover rounded-md'
                      src='https://images.pexels.com/photos/167491/pexels-photo-167491.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                      alt=''
                      fill
                      />

              </div> 
              <h1 className='mt-8 font-light text-cl tracking-wide'>Category Name</h1> 
          </Link>
        <Link
              className='flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6'
              href='/list?cat=test'
          >
              <div className='relative bg-slate-100 w-full h-96'>
                  <Image
                      className='object-cover rounded-md'
                      src='https://images.pexels.com/photos/4218027/pexels-photo-4218027.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                      alt=''
                      fill
                      />

              </div> 
              <h1 className='mt-8 font-light text-cl tracking-wide'>Category Name</h1> 
          </Link>
        <Link
              className='flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6'
              href='/list?cat=test'
          >
              <div className='relative bg-slate-100 w-full h-96'>
                  <Image
                      className='object-cover rounded-md'
                      src='https://images.pexels.com/photos/3587478/pexels-photo-3587478.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                      alt=''
                      fill
                      />

              </div> 
              <h1 className='mt-8 font-light text-cl tracking-wide'>Category Name</h1> 
          </Link>
        
        
      </div>
        
    </div>
  )
}

export default CategoryList