'use client'
import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

const SearchBar = () => {

    const router = useRouter();

    const handleSearch = (e: React.FormEvent<HTMLFormElement>) =>{
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const name = formData.get('name') as string;

        if(name){
            router.push(`/list?name=${name}`);
        }
    }
  return (
    <form 
    className='flex flex-1 justify-between gap-4 p-2 rounded-md bg-gray-100'
    onSubmit={handleSearch}
    >
        <input 
            className='flex-1 bg-transparent outline-none' 
            name='name'
            type="text" 
            placeholder='Search' />
        <button className='cursor-pointer'>
            <Image src='/search.png' width={16} height={16} alt=''></Image>
        </button>
    </form>
  )
}

export default SearchBar