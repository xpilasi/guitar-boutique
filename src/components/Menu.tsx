"use client"
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Menu = () => {

const   [open,setOpen] = useState(false);  
  return (
    <div className="" >
        <Image 
            className="cursor-pointer" 
            src='/menu.png' 
            alt='' width={28} height={28} 
            onClick={()=>setOpen((prev)=>!prev)}></Image>
        {open && (
            <div className="absolute bg-green-400 left-0 top-20 w-full h-[calc(100vh-80px)] flex flex-col items-center gap-8 text-xl z-10 justify-center">
            <Link href='/'>Homepage</Link>
            <Link href='/'>Shop</Link>
            <Link href='/'>Deals</Link>
            <Link href='/'>About</Link>
            <Link href='/'>Contact</Link>
            <Link href='/'>Logout</Link>
            <Link href='/'>Cart(1)</Link>
                 
            </div>
            
        )}
    </div>
  )
}

export default Menu