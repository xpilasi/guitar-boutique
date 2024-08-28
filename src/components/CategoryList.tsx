import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const CategoryList = () => {
  return (
    <div className='px-4 overflow-x-scroll'>

        <Link
            className='flex gap-4 md:gap-8'
            href='/list?cat=test'
        >
            <div className='relative bg-slate-100 w-full h-96'>
                <Image
                    className='object-cover'
                    src='https://images.pexels.com/photos/26804147/pexels-photo-26804147/free-photo-of-jugando-musica-musico-concierto.jpeg?auto=compress&cs=tinysrgb&w=400'
                    alt=''
                    fill
                    />

            </div>  
        </Link>
    </div>
  )
}

export default CategoryList