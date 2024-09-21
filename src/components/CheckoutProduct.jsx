import React from 'react';
import { useStateValue } from '../StateProvider';
function CheckoutProduct({ id, image, info, title, price, rating }) {
const[{basket},dispatch]=useStateValue();
    const removeFromBasket = () => {
dispatch({
    type: 'REMOVE_FROM_BASKET',
    id: id
})

    }



    return (
        <div className='mt-6 flex flex-row gap-4'>
            <img className='max-w-[250px]' src={image} />

            <div className=''>
                <p className=''>{title} <span className="ml-4 text-xs text-gray-700">{info}</span></p>

                <strong>${price}</strong>

                <div className="font-bold  text-orange-600 flex ">
                    {Array(rating)
                        .fill()
                        .map((_, i) => (
                            <p>★</p>
                        ))}
                </div>

                <button onClick={removeFromBasket} className='text-xs hover:bg-orange-700 text-gray-50 bg-slate-800 py-2 rounded w-[100px]'>Remove</button>

            </div>
        </div>
    )
}

export default CheckoutProduct