import React from 'react';
import Image from 'next/image';
import Filter from '<gboutique>/components/Filter';
import ProductList from '<gboutique>/components/ProductList';
import { wixClientServer } from '../lib/wixClientServer';
import { Suspense } from 'react';

const ListPage = async ({searchParams}:{searchParams:any}) => {

  const wixClient = await wixClientServer();


  const category = await wixClient.collections.getCollectionBySlug(searchParams.cat || 'all-products')
  console.log(category);
  return (
    <div className='px-4 md:px-8 lg:px-16 xl:32 2xl:px-64 relative pb-10'>

      <div className='hidden sm:flex bg-pink-50 px-4  justify-between  h-64'> {/* CAMPAIGN (Banner) */}

        <div className='w-2/3 flex flex-col items-center justify-center gap-8 '>{/* TEXT CONTAINER */}
          <h1 className='text-4xl font-semibold leading-[48px] text-gray-700'>Grab up to 50% off on Selected Products</h1>
          <button className='bg-red-400 rounded-3xl text-white py-2 text-sm px-4'>Buy Now</button>
        </div>

        <div className='relative w-1/3'>{/* IMAGE CONTAINER */}
          <Image 
            className='object-contain'
            src='/woman.png' 
            alt=''
            fill
            ></Image>
        </div>
      </div> 

      <div className=''> {/* FILTER */}
        <Filter/>
      </div>
      <h1 className='mt-10'>{category?.collection?.name} for you</h1>
      <div className='mt-12'>{/* PRODUCTS */}
        <Suspense fallback='LOADING DUDE...'>
            <ProductList 
            categoryId={category.collection?._id || '00000000-000000-000000-000000000001'}
            searchParams={searchParams}
            /> 
        </Suspense>
      
      </div>

    </div>
  )
}

export default ListPage