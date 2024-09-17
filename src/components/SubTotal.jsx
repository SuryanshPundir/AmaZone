import React from 'react'
import CurrencyFormat from 'react-currency-format'
import { useStateValue } from '../StateProvider'
import { getBasketTotal } from '../reducer'

export default function SubTotal() {
  const [{ basket }, dispatch] = useStateValue()
  return (
    <div className='flex flex-col p-2 bg-slate-100 rounded h-[100px] mt-2 w-[300px] justify-between'>
      <CurrencyFormat renderText={(value) => (
        <>
          <p>
            Subtotal ({basket.length} items): <strong>{value}</strong>
          </p>
          <small className='text-gray-500'>
            <input type="checkbox" /> This order contains a gift
          </small>
        </>
      )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"₹"}
      />

      <button className='text-sm bg-orange-500 hover:bg-orange-700 text-white font-bold py-1 px-2 rounded'>Proceed to Checkout</button>

    </div>
  )
}
