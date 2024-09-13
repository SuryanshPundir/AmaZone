import React from 'react'

export default function
    ({title,info,image,price,rating}) {

    return (
        <>
            <div class=" min-h-80 max-w-80 bg-gray-50 p-4 mb-3 flex flex-col gap-3 rounded">
                <div>
                    <img src={image} alt="" />
                </div>
                <div class="flex flex-col gap-4 flex-2">
                    <div class="flex flex-row justify-between">
                        <div class="flex flex-col">
                            <span class="text-xl font-bold" >{title}
                            </span>
                          
                            <p class="text-xs text-gray-700">{info}</p>
                        </div>
                        <div class="font-bold  text-orange-600">{price} <br/>
                        {Array(rating).fill().map((_,i)=>{return <span>★</span>})}
                        </div>
                    </div>
                    <button class="text-xs hover:bg-orange-700 text-gray-50 bg-slate-800 py-2 rounded w-[100px]">Add to cart</button>
                </div>
            </div>
        </>
    )
}
