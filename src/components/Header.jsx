import React from 'react'
import { AMAZON_LOGO, CART_ICON, SEARCH_ICON, USER_ICON, WHISHLIST_ICON } from '../utils/constants'

const Header = () => {
  return (
    <div className="flex justify-between bg-[#1C2228] p-6 items-center shadow-md">
        <img className='w-[125px]' src={AMAZON_LOGO}/>
        <div className='flex w-[400px] mr-56'>
        <input className='bg-[#2D3B47] border-2 border-[#455B6E] w-[100%] h-12 rounded-l-md placeholder:font-semibold' placeholder='  Search...'/>
       <div className='bg-[#E99317] py-2 px-3 rounded-r-md'> <img className='w-9 h-8 cursor-pointer' src={SEARCH_ICON}/></div>
        </div>
        <div className='flex items-center mr-10'>
            <img className='w-8 h-8 mr-8' src={WHISHLIST_ICON}/>
            <img className='w-8 h-8 mr-8' src={CART_ICON}/>
            <div className='border-2 rounded-full p-1'>
            <img className='w-10 h-10' src={USER_ICON}/></div>
        </div>
    </div>
  )
}

export default Header