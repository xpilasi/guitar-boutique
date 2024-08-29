import React from 'react'

const Filter = () => {
  return (
    <div className='mt-12 flex justify-between '>
        <div className='flex gap-6 flex-wrap'>
            <select 
            className='py-2 px-4 rounded-2xl text-xs font-medium bg-gray-200' 
            name="family" 
            id="">
                <option>Family</option>
                <option value="reverb">Reverb</option>
                <option value="overdrive">Overdrive</option>
                <option value="distortion">Distortion</option>
                <option value="fuzz">Fuzz</option>
                <option value="chorus">Chorus</option>
                <option value="loop">Loop</option>
                <option value="loop">Compressor</option>
                <option value="loop">Multi FX</option>
            </select>
            <select 
            className='py-2 px-4 rounded-2xl text-xs font-medium bg-gray-200' 
            name="type" 
            id="">
                <option>Type</option>
                <option value="digital">Digital</option>
                <option value="analog">Analog</option>
                
            </select>
            <select 
            className='py-2 px-4 rounded-2xl text-xs font-medium bg-gray-200' 
            name="brand" 
            id="">
                <option>Brand</option>
                <option value="reverb">Tesla</option>
                <option value="overdrive">Boogie</option>
                <option value="distortion">Joyo</option>
                <option value="fuzz">Krafted</option>
                <option value="chorus">Tone City</option>
                <option value="loop">Plumes</option>
                <option value="loop">Friedman</option>
            </select>
            <input className='text-xs rounded-2xl pl-2 w-24 ring-1 ring-gray-400' type="text" name='min' placeholder='min price' />
            <input className='text-xs rounded-2xl pl-2 w-24 ring-1 ring-gray-400' type="text" name='max' placeholder='max price' />
            <select 
            className='py-2 px-4 rounded-2xl text-xs font-medium bg-gray-200' 
            name="" 
            id="">
                
                <option>All Filters</option>
                
            </select>
            
        </div>
        <div>
            
            <select 
            className='py-2 px-4 rounded-2xl text-xs font-medium bg-white ring-1 ring-gray-400' 
            name="" 
            id="">
                <option>Sort By</option>
                <option value="">Price (low to high)</option>
                <option value="">Price (high to low)</option>
                <option value="">Price (Newest)</option>
                <option value="">Price (Oldest)</option>
                
            </select>
        </div>
    </div>
  )
}

export default Filter