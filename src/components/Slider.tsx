'use client'
import React, { useEffect } from 'react'
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const slides = [
    {
        id: 1,
        title: 'Marshall V12',
        description: 'New arrivals',
        img:'https://images.pexels.com/photos/18464648/pexels-photo-18464648/free-photo-of-taza-copa-beber-bebida.jpeg?auto=compress&cs=tinysrgb&w=400',
        url:'/',
        bg:'bg-gradient-to-r from-yellow-50 to-pink-50'

    },
    {
        id: 2,
        title: 'Monster Pedal',
        description: 'Awesome Tesla Overdrive',
        img:'https://images.pexels.com/photos/327556/pexels-photo-327556.jpeg?auto=compress&cs=tinysrgb&w=400',
        url:'/',
        bg:'bg-gradient-to-r from-green-50 to-purple-50'

    },
    {
        id: 3,
        title: 'Get it Now',
        description: 'Great Bass',
        img:'https://images.pexels.com/photos/26804147/pexels-photo-26804147/free-photo-of-jugando-musica-musico-concierto.jpeg?auto=compress&cs=tinysrgb&w=400',
        url:'/',
        bg:'bg-gradient-to-r from-blue-700 to-black-50'

    },
]

const Slider = () => {

    const [currentSlide,setCurrentSlide] = useState(0);

    // movimiento slider independiente:
    // useEffect(()=>{
    //     const interval = setInterval(()=>{
    //         setCurrentSlide(prev=>(prev === slides.length-1 ? 0 : prev + 1))
    //     },3000);

    //     return ()=> clearInterval(interval);

        
    // },[])
  return (
    <div className='h-[calc(100vh-80px)] overflow-hidden bg-red-300'>
        <div 
            className='w-max h-full flex transition-all ease-in-out duration-1000'
            style={{transform: `translateX(-${currentSlide * 100}vw)`}}
            >
            {slides.map(slide => (
                <div 
                    className={`${slide.bg} w-screen flex flex-col gap-16 xl:flex-row`} 
                    key={slide.id}>
                    {/* TEXT CONTAINER */}
                    <div className='h-1/2 xl:h-full xl:w-1/2 flex flex-col items-center justify-center gap-8 text-center'>
                        <h2 className={`text-xl lg:text-3xl 2xl:text-5xl`}>{slide.description}</h2>
                        <h1 className={`text-5xl lg:text-6xl 2xl:text-8xl font-semibold`}>{slide.title}</h1>
                        <Link href={slide.url}>
                            <button className='rounded-md bg-black text-white py-3 px-4' >SHOP NOW</button>
                        </Link>
                    </div>
                    {/* IMAGE CONTAINER */}
                    <div className='h-1/2 xl:h-full xl:w-1/2 relative'>
                        <Image
                            className='object-cover'
                            src={slide.img} alt='' fill sizes='100%' />
                    </div>
                </div>
            ))}
        </div>
        {/* DOTS */}
        <div className='absolute m-auto left-1/2 bottom-8 flex gap-4'>
        {
            slides.map((slide,index) =>(
                <div 
                    className={`  w-3 h-3 rounded-full ring-1 ring-gray-600 cursor-pointer flex items-center justify-center ${currentSlide === index ? 'scale-110' : ''}`}
                    key={slide.id}
                    onClick={()=>setCurrentSlide(index)}
                    >
                        {currentSlide === index && (
                            <div className='w-[5px] h-[6px]  bg-gray-600 rounded-full'></div>
                        )}
                    </div>
            ))
        }

        </div>
       
    </div>
  )
}

export default Slider