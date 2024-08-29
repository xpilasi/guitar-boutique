import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import LogoToneRelics from '../components/widgets/LogoToneRelics';

const Footer = () => {
  return (

    <div className='py-24 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 bg-gray-100 text-sm 4'>

      <div className='flex flex-col md:flex-row justify-between gap-24'> {/* TOP */}
        
        <div className='w-full md:w-1/2 lg:w-1/4 flex flex-col gap-8'> {/* LEFT */}
          <Link
          href='/'
          >
            <LogoToneRelics/>
          </Link>
          <p className=''>Carrer del Acer 66</p>
          <span className='font-semibold'>hello@gtonerelics.com</span>
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
          <div className='flex flex-col justify-between'>
            <h1 className='font-medium text-lg'>COMPANY</h1>
            <div className='flex flex-col gap-6'>
              <Link href='/'>About Us</Link>
              <Link href='/'>Careers</Link>
              <Link href='/'>Affiliates</Link>
              <Link href='/'>Blog</Link>
              <Link href='/'>Contact Us</Link>
            </div>
          </div>
          <div className='flex flex-col justify-between'>
            <h1 className='font-medium text-lg'>SHOP</h1>
            <div className='flex flex-col gap-6'>
              <Link href='/'>New arrivals</Link>
              <Link href='/'>Accesories</Link>
              <Link href='/'>Pedals</Link>
              <Link href='/'>Amplifiers</Link>
              <Link href='/'>Cabinets</Link>
            </div>
          </div>
          <div className='flex flex-col justify-between'>
            <h1 className='font-medium text-lg'>HELP</h1>
            <div className='flex flex-col gap-6'>
              <Link href='/'>Customer Service</Link>
              <Link href='/'>My account</Link>
              <Link href='/'>Find a Store</Link>
              <Link href='/'>Legal & Privacy</Link>
              <Link href='/'>Gift Card</Link>
            </div>
          </div>
        </div>

        <div className='w-full md:w-1/2 lg:w-1/4 flex flex-col gap-8'> {/* RIGHT */}
          <h1 className='font-medium text-lg'>SUSCRIBE</h1>
          <p>Be the first to get the latest news about trends, promotions, and much more!</p>
          <div className='flex'>
            <input className='p-4 w-3/4' type="text" placeholder='Email address' />
            <button className='w-1/4 bg-red-400 text-white'>JOIN</button>
          </div>
            <span className='font-semibold'>Secure Payments</span>
            <div className='flex justify-between'>
              <Image src='/discover.png' alt='' width={40} height={20}></Image>
              <Image src='/skrill.png' alt='' width={40} height={20}></Image>
              <Image src='/paypal.png' alt='' width={40} height={20}></Image>
              <Image src='/mastercard.png' alt='' width={40} height={20}></Image>
              <Image src='/visa.png' alt='' width={40} height={20}></Image>
            </div>
         

        </div>



      </div>
      <div className='flex flex-col md:flex-row items-center justify-between gap-8 mt-16'> {/* BOTTOM */}
        <div className=''>© 2024 Tonerelics</div>
        <div className=''>Delivery allowed for the EU</div>
        <div className=''>Website developed by xPilab</div>
        
      </div>

    </div>
    
  )
}

export default Footer