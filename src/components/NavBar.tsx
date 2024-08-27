import React from 'react'
import Link from 'next/link'
import Menu from './Menu'
import Image from 'next/image'
import NavIcons from './NavIcons'
import SearchBar from './SearchBar'

const NavBar = () => {
  return (
    <div className='h-20 px-4 md:px-8 lg:px-16 xl:32 2xl:px-64 relative'>
        {/* MOBILE */}
        <div className='h-full flex items-center justify-between md:hidden '>
        <Link href='/'>
            <div className='text-2xl tracking-widest'>
            Guitar Boutique
            </div>
        </Link>
        <Menu/>
        </div>

        {/* BIGGER SCREENS */}
        <div className='hidden md:flex items-center h-full justify-center gap-8'>

            {/* LEFT */}
            <div className='w-1/3 xl:w-1/2 flex items-center gap-12'>
            <Link href='/'className='flex items-center gap-3'>
                <Image src='/logo.png' alt='' width={24} height={24}></Image>
                <div className='text-2xl tracking-widest'>
                Guitar Boutique
                </div>
            </Link>
            <div className='hidden xl:flex gap-4'>
            <Link href='/'>Homepage</Link>
            <Link href='/'>Shop</Link>
            <Link href='/'>Deals</Link>
            <Link href='/'>About</Link>
            <Link href='/'>Contact</Link>
            <Link href='/'>Logout</Link>
            <Link href='/'>Cart(1)</Link>
            </div>
            </div>

            {/* RIGHT */}
            <div className='w-2/3 xl:w-1/2 flex items-center justify-between gap-8'>
            <SearchBar></SearchBar>
            <NavIcons></NavIcons>

            </div>
        </div>
    </div>
  )
}

export default NavBar