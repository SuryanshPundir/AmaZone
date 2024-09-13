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
    <Products/>
    <Products/>
   
    
</div>

<div className='relative z-0 flex justify-center gap-4 mx-auto'>
<Products/>
<Products/>
<Products/>
</div>

<div >

</div>
</>
  )
}
