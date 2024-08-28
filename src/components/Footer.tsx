import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  return (

    <div className='py-24 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 bg-gray-100 text-sm mb-24'>

      <div className='flex justify-between gap-24'> {/* TOP */}
        
        <div className='w-full md:w-1/2 lg:w-1/4 flex flex-col gap-8'> {/* LEFT */}
          <Link
          href='/'
          >
            <div className='text-xl tracking-wide'>BOUTIQUE</div>
          </Link>
          <p className=''>Carrer del Acer 66</p>
          <span className='font-semibold'>hello@gboutique.com</span>
          <span className='font-semibold'>+34 645 73 73</span>
          <div className='flex gap-6'>
            <Image src='/facebook.png' alt='' width={16} height={16}></Image>
            <Image src='/instagram.png' alt='' width={16} height={16}></Image>
            <Image src='/youtube.png' alt='' width={16} height={16}></Image>
            <Image src='/pinterest.png' alt='' width={16} height={16}></Image>
            <Image src='/x.png' alt='' width={16} height={16}></Image>
          </div>
        </div>
        <div className='w-1/2 lg:flex justify-between hidden'> {/* CENTER */}

        </div>
        <div className='w-full md:w-1/2 lg:w-1/4 flex flex-col gap-8'> {/* RIGHT */}
          <h1 className='font-medium text-lg'>SUSCRIBE</h1>
          <p>Be the first to get the latest news about trends, promotions, and much more!</p>
        </div>



      </div>
      <div className=''> {/* BOTTOM */}

      </div>

    </div>
    
  )
}

export default Footer