'use client'
import { usePathname, useSearchParams, useRouter } from 'next/navigation'
// import { useRouter } from 'next/router';
import React from 'react'

const Filter = () => {

    const pathName = usePathname();
    const searchParams = useSearchParams();
    const {replace} = useRouter();

    //escucha los eventos de select y de input
    const handleFilterChange = (e:React.ChangeEvent<HTMLSelectElement | HTMLInputElement>)=>{
        const {name,value} = e.target;
        const params = new URLSearchParams(searchParams)
        params.set(name,value);
        //pathName = /list
        //replace -->reemplaza el path actual
        replace(`${pathName}?${params.toString()}`)
        
        
    }  

  return (
    <div className='mt-12 flex justify-between '>
        <div className='flex gap-6 flex-wrap'>
            <select 
            className='py-2 px-4 rounded-2xl text-xs font-medium bg-gray-200' 
            name="family" 
            id=""
            onChange={handleFilterChange}>
                <option>Family</option>
                <option value="reverb">Reverb</option>
                <option value="overdrive">Overdrive</option>
                <option value="distortion">Distortion</option>
                <option value="fuzz">Fuzz</option>
                <option value="chorus">Chorus</option>
                <option value="loop">Loop</option>
                <option value="compressor">Compressor</option>
                <option value="multifx">Multi FX</option>
            </select>
         
            <select 
            className='py-2 px-4 rounded-2xl text-xs font-medium bg-gray-200' 
            name="brand" 
            id=""
            onChange={handleFilterChange}>
                <option>Brand</option>
                <option value="tesla">Tesla</option>
                <option value="boogie">Boogie</option>
                <option value="joyo">Joyo</option>
                <option value="krafted">Krafted</option>
                <option value="tonecity">Tone City</option>
                <option value="plumes">Plumes</option>
                <option value="friedman">Friedman</option>
            </select>

            <input 
            className='text-xs rounded-2xl pl-2 w-24 ring-1 ring-gray-400' 
            type="text" 
            name='min' 
            placeholder='min price'
            onChange={handleFilterChange}
             />

            <input 
            className='text-xs rounded-2xl pl-2 w-24 ring-1 ring-gray-400' 
            type="text" 
            name='max' 
            placeholder='max price'
            onChange={handleFilterChange} />

            <select 
            className='py-2 px-4 rounded-2xl text-xs font-medium bg-gray-200' 
            name="" 
            id=""
            >
                
                <option>All Filters</option>
                
            </select>
            
        </div>
        <div>
            
            <select 
            className='py-2 px-4 rounded-2xl text-xs font-medium bg-white ring-1 ring-gray-400' 
            name="sort" 
            id=""
            onChange={handleFilterChange}
            >
                <option>Sort By</option>
                <option value="asc price">Price (low to high)</option>
                <option value="desc price">Price (high to low)</option>
                <option value="asc lastUpdated">Product (Newest)</option>
                <option value="desc lastUpdated">Product (Oldest)</option>
                
            </select>
        </div>
    </div>
  )
}

export default Filter