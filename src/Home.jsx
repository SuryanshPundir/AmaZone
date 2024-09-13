import React from 'react'
import './Home.css'
import Products from './components/Products'
export default function Home() {
  return (
<>
<div className='relative'>
    <img className='w-full -z-10 -mb-[20%] mask-gradient' src='https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg' alt="Amazon banner" />
</div>

<div className='relative z-0 flex justify-center gap-4 mx-auto'>
    <Products title={"Acer Nitro V"} info={'I5 12500h RTX3060 144hz Refresh Rate'} image={"https://images.pexels.com/photos/1229861/pexels-photo-1229861.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"} price={68000} rating={4}/>
    <Products title={"Apple MacBook"} info={'MacBook M1'} image={"https://images.pexels.com/photos/1229860/pexels-photo-1229860.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"} price={68000} rating={5}/>
   
    
</div>

<div className='relative z-0 flex justify-center gap-4 mx-auto'>
<Products title={"Apple MacBook"} info={'MacBook M1'} image={"https://images.pexels.com/photos/1229860/pexels-photo-1229860.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"} price={68000} rating={5}/>
<Products title={"Acer Nitro V"} info={'I5 12500h RTX3060 144hz Refresh Rate'} image={"https://images.pexels.com/photos/1229861/pexels-photo-1229861.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"} price={68000} rating={4}/>
<Products title={'Lenovo Yoga'} info={'I5 12500h RTX3060 144hz Refresh Rate'} image={"https://images.pexels.com/photos/1229860/pexels-photo-1229860.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"} price={68000} rating={5}/>
</div>

<div >
<Products title={'Asus Vivobook'} info={'I5 12500h RTX3060 144hz Refresh Rate'} image={"https://images.pexels.com/photos/1229859/pexels-photo-1229859.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"} price={68000} rating={4}/>
</div>
</>
  )
}
