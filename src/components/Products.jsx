import React from 'react'
import { useStateValue } from '../StateProvider'

export default function
    ({ title, info, image, price, rating }) {
    const [{ basket }, dispatch] = useStateValue()

    const addToBasket = () => {

        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                title: title,
                info: info,
                image: image,
                price: price,
                rating: rating
            }
        })
    }

    return (
        <>
            <div className=" min-h-80 max-w-80 bg-gray-50 p-4 mb-3 flex flex-col gap-3 rounded">
                <div>
                    <img src={image} alt="" />
                </div>
                <div className="flex flex-col gap-4 flex-2">
                    <div className="flex flex-row justify-between">
                        <div className="flex flex-col">
                            <span className="text-xl font-bold" >{title}
                            </span>

                            <p className="text-xs text-gray-700">{info}</p>
                        </div>
                        <div className="font-bold  text-orange-600">{price} <br />
                            {Array(rating).fill().map((_, i) => { return <span>★</span> })}
                        </div>
                    </div>
                    <button className="text-xs hover:bg-orange-700 text-gray-50 bg-slate-800 py-2 rounded w-[100px]" onClick={addToBasket}>Add to cart</button>
                </div>
            </div>
        </>
    )
}
