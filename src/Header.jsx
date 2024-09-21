import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCart from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom';
import { useStateValue } from './StateProvider';
import { auth } from './firebase';

export default function Header() {
  const [{ basket,user }, dispatch] = useStateValue()
const handleAuthentication=()=>{
  if(user){
    auth.signOut();
  }
}

  return (
    <>
      <div className='h-14 bg-slate-700 flex align-middle sticky top-0 z-[100]'>
        <Link to={"/"} className='flex'>
          <img className='width-[100px] object-contain m-4 mt-5' src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="" />
        </Link>
        <div className="flex flex-1 items-center">
          <input className='outline-none text-sm p-[2px] flex flex-1' type="text" />
          <SearchIcon className=" w-32 h-32 text-white bg-orange-400" />
        </div>
        <div className="flex text-white justify-end items-center space-x-10 ml-10 mr-10">

<Link to={!user && "/login"}>
          <div onClick={handleAuthentication} className="cursor-pointer flex flex-col">
            <span className='text-xs'>Hello User</span>

            <span>{user ? 'Sign Out' : 'Sign In'}</span>
    
          </div>
</Link>



          <div className="cursor-pointer flex flex-col">
            <span className='text-xs'>Returns</span>
            <span>& Orders</span>
          </div>

          <div className="cursor-pointer flex flex-col">
            <span className='text-xs'>Your</span>
            <span>Prime</span>
          </div>
          <Link to={"/checkout"}>
            <div className="flex items-center">
              <ShoppingCart />
              <span className='text-xs font-bold ml-1 mr-1'>{basket?.length}</span>
            </div>
          </Link>
        </div>
      </div>
    </>
  )
}
