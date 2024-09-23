import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { wixClientServer } from '<gboutique>/app/lib/wixClientServer';
import { products } from '@wix/stores';
import DOMPurify from 'isomorphic-dompurify';

const PRODUCT_PER_PAGE = 20;
const ProductList = async (
    {
        categoryId,
        limit,
        searchParams,
    }:{
        categoryId?:string; 
        limit?:number,
        searchParams?:any
    }
) => {

const wixClient = await wixClientServer();
const res = await wixClient.products
                    .queryProducts()
                    .startsWith('name',searchParams?.name || '')
                    .eq('collectionIds',categoryId)
                    .hasSome('productType',searchParams?.type?[searchParams.type]:['physical','digital'])
                    .gt('priceData.price',searchParams?.min || 0)
                    .lt('priceData.price',searchParams?.max || 999999)
                    .limit(limit || PRODUCT_PER_PAGE)
                    .find();

           console.log(res);
                    

  return (
    <div className=' mt-12 flex gap-x-8 gap-y-16 justify-between flex-wrap'>
        {res.items.map((product:products.Product)=>(

            <Link
            className='w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]' //si se utiliza fill el parent tiene que ser relative 
            key={product._id}
            href={'/'+product.slug}>
                <div className='relative w-full h-80 '>
                   
                

                     <Image
                        className='py-0 absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500'
                        src={product.media?.mainMedia?.image?.url || '/product.png'}
                        alt=''
                        fill
                        
                        sizes='100vw'
                    />
                     
                    
                    
                    {product.media?.items && 
                        <Image
                        className='  absolute object-cover rounded-md'
                        src={product.media?.items[1]?.image?.url || '/product.png'}
                        alt=''
                        fill
                        sizes='100vw'
                        />
                    }
                   
                   </div>  
                
                
                <div className='flex justify-between'>
                    <span className='font-medium'>{product.name}</span>
                    <span className='font-semibold'>${product.priceData?.price}</span>
                </div>
                {product.additionalInfoSections &&
                    <div 
                        className='text-sm text-gray-500 ' 
                        dangerouslySetInnerHTML={{__html:DOMPurify
                                                            .sanitize(
                                                                product.additionalInfoSections?.find(
                                                                    (section:any) => section.title === "shortDesc"
                                                                )?.description || ''
                                                            )}}>
                        
                        
                    </div>
                }
                <div>
                    <button 
                        className='rounded-2xl ring-1 ring-red-400 text-red-400 text-xs w-max py-2 px-4 hover:bg-red-400 hover:text-white'
                        >Add to Cart
                    </button>
                </div>
            
            </Link>
        ))}
       
      
       
        
    </div>
  )
}

export default ProductList