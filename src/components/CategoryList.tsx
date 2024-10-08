import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { wixClientServer } from '<gboutique>/app/lib/wixClientServer';

const CategoryList = async () => {

    const wixClient = await wixClientServer();

    const categories = await wixClient
                                .collections
                                .queryCollections()
                                .find()
  return (
    <div className='px-4 overflow-x-scroll scrollbar-hide'>
      <div className='flex gap-4 md:gap-8'>
        
        { categories.items.map(
            item =>(
                
            <Link
              className='flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6'
              href={`/list?cat=${item.slug}`}
              key={item._id}
            >
              <div className='relative bg-slate-100 w-full h-96'>
                  <Image
                      className='object-cover rounded-md'
                      src={item.media?.mainMedia?.image?.url!}
                      alt=''
                      fill
                      />

              </div> 
              <h1 className='mt-8 font-light text-xl tracking-widest  flex justify-center'>{item.name}</h1> 
            </Link>
            )
        )
            
        }
        
         
        
        
      </div>
        
    </div>
  )
}

export default CategoryList