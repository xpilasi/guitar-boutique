
import React from 'react';
import ProductImages from '<gboutique>/components/ProductImages';
import CustomizeProducts from '<gboutique>/components/CustomizeProducts';
import Add from '<gboutique>/components/Add';

const SinglePage = () => {
  return (
    <div className='px-4 md:px-8 lg:px-16 xl:32 2xl:px-64 relative flex flex-col lg:flex-row gap-16 '>

      <div className='w-full lg:w-1/2 lg:sticky top-20 h-max'>{/* IMG */}
        <ProductImages/>
      </div> 

      <div className='w-full lg:w-1/2 flex flex-col gap-6'>{/* TEXTS */}
        <h1 className='text-4xl font-medium'>Tesla Wale Reverb</h1>
        <p className='text-gray-500'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium 
          sit distinctio soluta, recusandae amet odio blanditiis sint impedit iste? 
          Voluptates animi soluta aliquam nemo eaque! Pariatur expedita at delectus illo.
        </p>
        <div className='h-[2px] bg-gray-100'></div>{/* Línea divisoria */}

        <div className='flex items-center gap-4'>
          <h3 className='text-xl text-gray-500 line-through'>$59</h3>
          <h3 className='text-2xl font-medium'>$49</h3>
        </div>

        <div className='h-[2px] bg-gray-100'></div>{/* Línea divisoria */}
        <CustomizeProducts/>
        <Add/>
        <div className='h-[2px] bg-gray-100'></div>{/* Línea divisoria */}
        
        <div className='text-sm'>{/* Title + description */}
          <h4 className='font-medium mb-4'>Titles</h4>
          <p>{/* Description */}
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium 
          sit distinctio soluta, recusandae amet odio blanditiis sint impedit iste? 
          Voluptates animi soluta aliquam nemo eaque! Pariatur expedita at delectus illo.
          </p>
        </div>
        <div className='text-sm'>{/* Title + description */}
          <h4 className='font-medium mb-4'>Titles</h4>
          <p>{/* Description */}
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium 
          sit distinctio soluta, recusandae amet odio blanditiis sint impedit iste? 
          Voluptates animi soluta aliquam nemo eaque! Pariatur expedita at delectus illo.
          </p>
        </div>
        <div className='text-sm'>{/* Title + description */}
          <h4 className='font-medium mb-4'>Titles</h4>
          <p>{/* Description */}
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium 
          sit distinctio soluta, recusandae amet odio blanditiis sint impedit iste? 
          Voluptates animi soluta aliquam nemo eaque! Pariatur expedita at delectus illo.
          </p>
        </div>

      </div> 
      



    </div>
  )
}

export default SinglePage