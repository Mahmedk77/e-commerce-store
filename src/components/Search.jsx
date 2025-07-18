import React from 'react'
import { assets } from '../assets/assets'

const Search = () => {
  return (
    <div className='flex justify-center bg-slate-50 p-5 border-t border-gray-200'>
        <div className='relative'>
        <input type="text" placeholder='Search' className='border-1 border-gray-400 w-[40rem] rounded-full px-6 py-2 text-sm outline-0' />
        <img src={assets.search_icon} alt="search icon at search bar in collections page" className='w-4 absolute right-4 bottom-[11px]' />
        </div>
        <img src={assets.cross_icon} alt="cross icon at search bar in collections page" className='h-4'/>

    </div>
  )
}

export default Search
