import React from 'react'

export default function
    () {

    return (
        <>
            <div class=" min-h-80 max-w-80 bg-gray-50 p-4 mb-3 flex flex-col gap-3 rounded">
                <div>
                    <img src="https://images.pexels.com/photos/1229861/pexels-photo-1229861.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                </div>
                <div class="flex flex-col gap-4 flex-2">
                    <div class="flex flex-row justify-between">
                        <div class="flex flex-col">
                            <span class="text-xl font-bold" >HP Pavilion
                            </span>
                            <p class="text-xs text-gray-700">ID: 23432252</p>
                            <p class="text-xs text-gray-700">I5 12500h RTX3060 144hz Refresh Rate</p>
                        </div>
                        <span class="font-bold  text-orange-600">₹65,000 ★★★★★
                        </span>
                    </div>
                    <button class="text-xs hover:bg-orange-700 text-gray-50 bg-slate-800 py-2 rounded w-[100px]">Add to cart</button>
                </div>
            </div>
        </>
    )
}
