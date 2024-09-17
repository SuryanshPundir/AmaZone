import React from 'react'
import SubTotal from './components/SubTotal'
import { useStateValue } from './StateProvider'
import CheckoutProduct from './components/CheckoutProduct'
export default function Checkout() {
    const [{ basket }, dispatch] = useStateValue()
    return (
        <>
            <div className="flex " >
                <div className="flex flex-[2] p-2 flex-col">
                    <img className='mb-4' src="https://images-eu.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" alt="" />
                    <div className='min-w-[420px] p-6 bg-slate-100'>
                        <h1><b>Your Shopping Basket:</b></h1>
                       
                        {basket.map(item => (
                            <CheckoutProduct
                                id={item.id}
                                info={item.info}
                                title={item.title}
                                image={item.image}
                                price={item.price}
                                rating={item.rating}
                            />
                        ))}

                    </div>
                </div>
                <div className='flex flex-1 pl-10'>
                    <SubTotal />
                </div>
            </div>

        </>
    )
}
