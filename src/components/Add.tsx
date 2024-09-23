'use client'
import React, { useEffect } from 'react';
import { useState } from 'react';

const Add = (
    {
        productId,
        variantId,
        stockNumber,
        resetQty,


    }:{
        productId:string,
        variantId: string,
        stockNumber: number,
        resetQty?: boolean,
    }
) => {

    const [variantIdQ, setVariantIdQ] = useState(false);
    const [quantity, setQuantity] =  useState(1)
    // Temporary:
    // const stock = 4;

    

    const handleQuantity = (type: 'i' | 'd') =>{
        if(type === 'd' && quantity > 1 ){
            setQuantity((prev)=>prev-1)

        }if(type === 'i' && quantity < stockNumber ){
            setQuantity((prev)=>prev+1)
        }
    }

    useEffect(()=>{
        console.log(`Reset Qty: ${resetQty}`);
        
        if(resetQty){
            console.log('CHANGED');
            setQuantity(1)
            
        }
        
    },[])

  return (
    <div className='flex flex-col gap-4'>
        <h4 className='font-medium'>Choose a quantity</h4>
        <div className='flex justify-between'>
            <div className='flex items-center gap-4'>
                <div className='bg-gray-200 rounded-3xl py-2 px-4 flex items-center justify-between w-32'>
                    <button className='cursor-pointer text-xl' onClick={()=>handleQuantity('d')}>-</button>
                        {quantity}
                    <button className='cursor-pointer text-xl' onClick={()=>handleQuantity('i')}>+</button>
                </div>
                <div className='text-xs'>Only <span className='text-orange-400'>{stockNumber} items</span> left!<br/> {"Don't"} miss it.</div>

            </div>
            <button className='w-36 text-sm rounded-3xl ring-1 ring-red-400 text-red-400 py-2 px-4 hover:bg-red-400 hover:text-white disabled:cursor-not-allowed disabled:bg-pink-200 disabled:text-white '>Add to Cart</button>    
        </div>
        
    </div>
  )
}

export default Add