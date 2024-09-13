
import React from 'react';
import ProductImages from '<gboutique>/components/ProductImages';
import CustomizeProducts from '<gboutique>/components/CustomizeProducts';
import Add from '<gboutique>/components/Add';
import { wixClientServer } from '../lib/wixClientServer';
import { notFound } from 'next/navigation';
import { log } from 'console';

const SinglePage = async ({params}:{params:{slug: string}}) => {

  const wixClient = await wixClientServer();
  const products = await wixClient
                          .products
                          .queryProducts()
                          .eq('slug',params.slug)
                          .find();

 if(!products.items[0]){
  return notFound();
 }
 
 

 const product = products.items[0];
 console.log(product.productOptions);
 
                        
  return (
    <div className='px-4 md:px-8 lg:px-16 xl:32 2xl:px-64 relative flex flex-col lg:flex-row gap-16 '>

      <div className='w-full lg:w-1/2 lg:sticky top-20 h-max'>{/* IMG */}
        <ProductImages items={product.media?.items}/>
      </div> 

      <div className='w-full lg:w-1/2 flex flex-col gap-6'>{/* TEXTS */}
        <h1 className='text-4xl font-medium'>{product.name}</h1>
        <p className='text-gray-500'>
          {product.description}
        </p>
        <div className='h-[2px] bg-gray-100'></div>{/* Línea divisoria */}

        {product.priceData?.discountedPrice === product.priceData?.price ? (
          <h3 className='text-2xl font-medium'>${product.priceData?.price}</h3>
        ) :(
          <div className='flex items-center gap-4'>
            <h3 className='text-xl text-gray-500 line-through'>${product.priceData?.discountedPrice}</h3>
            <h3 className='text-2xl font-medium'>${product.priceData?.price}</h3>
          </div>

          )}

        <div className='h-[2px] bg-gray-100'></div>{/* Línea divisoria */}

        {/* Si hay opciones, entonces muéstralas: */}
        {
          product.variants && product.productOptions && (

            <CustomizeProducts 
                    productId={product._id!}
                    variants={product.variants}
                    productOptions={product.productOptions}
            />
          )

        }
        
        <Add/>
        <div className='h-[2px] bg-gray-100'></div>{/* Línea divisoria */}

          {product.additionalInfoSections?.map((section:any)=>(

            <div className='text-sm' key={section.title}>{/* Title + description */}
            <h4 className='font-medium mb-4'>{section.title}</h4>
              <p>{/* Description */}
              {section.description}
              </p>
            </div>
          )
          )

          }

      </div> 

    </div>
  )
}

export default SinglePage