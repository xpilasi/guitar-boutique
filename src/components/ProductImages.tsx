'use client'
import React from 'react';
import Image from 'next/image';
import { useState } from 'react';


// const images = [

    
//     {
//     id: 1,
//     url: 'https://images.unsplash.com/photo-1614440401656-400a12f79b78?q=80&w=1364&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    
// },
//     {
//     id: 2,
//     url: 'https://images.unsplash.com/photo-1614440401829-3966573a5d44?q=80&w=1364&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    
// },
//     {
//     id: 3,
//     url: 'https://images.unsplash.com/photo-1621173403731-0e81364e07f4?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    
// },
//     {
//     id: 4,
//     url: 'https://images.unsplash.com/photo-1646396148893-2ee7406d535f?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    
// },
// ]
const ProductImages = ({items}: {items: any}) => {

    const [index,setIndex] = useState(0);

  return (
    <div className=''>
       
        <div className='h-[500px] relative'> {/* Big Image */}
        <Image
                className='object-cover rounded-md'
                src={items[index].image?.url}
                alt=''
                fill
                sizes='50vw'
            ></Image>

        </div>
        <div className='flex justify-between gap-4 mt-12'> {/* Small Images (map) */}
            {items.map((item:any,i: number)=>(
                <div 
                className='w-1/4 h-32 relative gap-4 mt-8 cursor-pointer'
                key={item._id}
                onClick={()=> setIndex(i) }
                >
                    <Image
                        className='object-cover rounded-md'
                        src={item.image?.url}
                        alt=''
                        fill
                        sizes='30vw'


                    />       
                </div>
            ))}
        </div>
        
            
        
    </div>
  )
}

export default ProductImages