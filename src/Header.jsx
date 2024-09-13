import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCart from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom';
export default function Header() {
  return (
    <>
      <div className='h-14 bg-slate-700 flex align-middle sticky top-0 z-[100]'>

        <img className='width-[100px] object-contain m-4 mt-5' src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="" />


        <div className="flex flex-1 items-center">
          <input className='outline-none text-sm p-[2px] flex flex-1' type="text" />
          <SearchIcon className=" w-32 h-32 text-white bg-orange-400" />
        </div>
        <div className="flex text-white justify-end items-center space-x-10 ml-10 mr-10">

          <div className="cursor-pointer flex flex-col">
            <span className='text-xs'>Hello User</span>
            <span>Sign In</span>
          </div>

          <div className="cursor-pointer flex flex-col">
            <span className='text-xs'>Returns</span>
            <span>& Orders</span>
          </div>

          <div className="cursor-pointer flex flex-col">
            <span className='text-xs'>Your</span>
            <span>Prime</span>
          </div>

          <div className="flex items-center">
            <ShoppingCart />
            <span className='text-xs font-bold ml-1 mr-1'>0</span>
          </div>

        </div>
      </div>
    </>
  )
}
