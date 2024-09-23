'use client'
import React, { useEffect, useState } from 'react';
import { products } from '@wix/stores';
import Add from './Add';

const CustomizeProducts = ({
  productId,
  variants,
  productOptions
}:{
  productId:string,
  variants: products.Variant[],
  productOptions: products.ProductOption[]
}) => {

  const [selectedOptions,setSelectedOptions] = useState <{[key:string]:string}>({});
  const [selectedVariant,setSelectedVariant] =useState<products.Variant>(); 
  // const [newVariants,setNewVariants] = useState<boolean>(true);

  //Whenever the selectedOptions change update:
  const newVariants =  true;
  useEffect(()=>{
    console.log(variants)
    console.log('test');
    console.log(`New variants: ${newVariants}`);
    
    
    
    const variant = variants.find((v =>{
      const variantChoices = v.choices;
      // console.log(variantChoices);
      !variantChoices ? console.log('FALSE'):console.log('TRUE');
      ;
      
    
      if(!variantChoices)
      return false;
      return Object.entries(selectedOptions).every(
        ([key,value])=>variantChoices[key] === value
      );
    }));

    setSelectedVariant(variant);

  },[selectedOptions,variants])

  const handleOptionsSelect = (optionType : string, choice: string)=>{
    setSelectedOptions((prev) =>({...prev,[optionType]:choice}))
  }
  ;
  
  //Me devuelve el stock de la variante (Boolean):
  const isVariantInStock = (choices:{[key:string]:string}) => {

    //Verifico si al menos 1 variant cumple con la condición (combinación de choices)
    //.some devuelve TRUE o FALSE
    return variants.some((variant)=>{
      const variantChoices = variant.choices;

      //Si no existe la combinación entonces me devuelve false 
      if(!variantChoices){return false};
      
      //En caso contratio me devuelve un objeto
      return (
        Object.entries(choices).every(
                                      ([key,value])=> variantChoices[key] === value
                                     ) && 
                                      variant.stock?.inStock && 
                                      variant.stock?.quantity &&
                                      variant.stock?.quantity > 0
      ); 
      
    } ) 
  }

  ;
  
  return (
    <div className='flex flex-col gap-6'>
      {     productOptions.map(option=>(
        <div className='flex flex-col gap-6'key={option.name}>
          <h4 className='font-medium'>Choose a {option.name}</h4>
          <ul className='flex items-center gap-3'>
          {option.choices?.map(choice=>
            {
              
              //If stock is false disabled is TRUE
              const disabled = !isVariantInStock({
                ...selectedOptions,
                [option.name!]:choice.description!,
              });


              const selected = selectedOptions[option.name!] === choice.description;

              const clickHandler = disabled 
                                    ? undefined //if disabled is TRUE
                                    : ()=>handleOptionsSelect(option.name!,choice.description!);
              
              return option.name === 'Color' //if the
              
                ? (
                // Color
                <li  
                  className='w-8 h-8 rounded-full ring-1 ring-gray-300 relative ' 
                  style={{backgroundColor:choice.value, cursor:disabled ? 'not-allowed' :'pointer'}}
                  onClick={clickHandler}  
                  >
                  {selected && <div className='absolute w-10 h-10 rounded-full ring-2 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'></div>}
                  {disabled && <div className='absolute w-10 h-[2px] bg-red-400 rotate-45 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'></div>}
                </li>
              ) : (

                // Size
                <li 
                  className='ring-1 ring-red-300 rounded-md text-red-300 py-1 px-4 text-sm '
                  style={{
                    backgroundColor:selected ? '#f35c7a' : disabled ? '#FBCFE8' : 'white', 
                    cursor:disabled ? 'not-allowed' :'pointer',
                    color: selected || disabled ? 'white'  : '#f35c7a',
                    boxShadow: disabled ? 'none': ''
                    
                  }}
                  onClick={clickHandler}>{choice.description}</li>
              ) 
                
              
            
            })
          
          }
     </ul>
    </div>

            
      ))   
        
}<Add 
  productId={productId} 
  variantId={selectedVariant?._id || '00000000-000000-000000-000000000000'} 
  stockNumber={selectedVariant?.stock?.quantity || 0}
  resetQty={newVariants}
  />
{/* 
            
            
              
              <li className='w-8 h-8 rounded-full ring-1 ring-gray-300 cursor-pointer relative bg-blue-400'>
                  
              </li>
              <li className='w-8 h-8 rounded-full ring-1 ring-gray-300 cursor-not-allowed relative bg-green-400'>
              
              </li>
             */}

{/* 
                 
            <ul className='flex items-center gap-3'>
                 
                 <li className='ring-1 ring-red-300 rounded-md bg-red-400 text-white py-1 px-4 text-sm cursor-pointer'>Medium</li>
                 <li className='ring-1 ring-pink-200 rounded-md bg-pink-200 text-white  py-1 px-4 text-sm cursor-not-allowed'>Large</li>
             </ul> */}
            
        
    </div>
  )
}

export default CustomizeProducts