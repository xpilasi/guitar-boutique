
// 'use client'
import Slider from "<gboutique>/components/Slider";
import ProductList from "<gboutique>/components/ProductList";
import CategoryList from "<gboutique>/components/CategoryList";
import { useContext, useEffect } from "react";
import { WixClientContext } from "<gboutique>/context/wixContext";
import { useWixClient } from "./hooks/useWixClient";
import { wixClientServer } from "./lib/wixClientServer";
import { Suspense } from "react";

const HomePage = async() =>  {



// const wixClient = useWixClientServer();
// const res = await wixClient.products.queryProducts().find();
// console.log(res);
 
// useEffect(()=>{
//  },[wixClient]); 

//   const getProducts = async()=>{

//     

    
//   }

//   getProducts();


 
const wixClient = await wixClientServer();
const res = await wixClient.products.queryProducts().find();
console.log('test');

console.log(res);
 
  return (
    <div className=''>
      <Slider/>
      <div className="mt-24 px-4 md:px-8 lg:px-16 xl:32 2xl:px-64">
        <h1 className="text-2xl">Featured products</h1>
        <Suspense fallback={'loading'}>
        <ProductList categoryId={process.env.FEATURED_PRODUCTS_CATEGORY_ID!} limit={4}/>
        </Suspense> 
        
      </div>
      <div className="mt-24 ">
        <h1 className="text-2xl mb-12  px-4 md:px-8 lg:px-16 xl:32 2xl:px-64">Categories</h1>
        <CategoryList/>
      </div>
      <div className="mt-24 px-4 md:px-8 lg:px-16 xl:32 2xl:px-64">
        <h1 className="text-2xl">New Products</h1>
        {/* <ProductList/> */}
      </div>
      


    
    </div>
  )
}

export default HomePage