import React from 'react'
import { useStateValue } from './StateProvider'
import CheckoutProduct from './components/CheckoutProduct'
import { Link } from 'react-router-dom'
export default function Payment() {
  const [{ basket, user }, dispatch] = useStateValue()
  return (
    <>
      <div>
        <h1>Checkout(<Link to="/checkout">{basket?.length} items</Link> )</h1>
        <div>
          <h3>Address:</h3>
          <p>{user?.email}</p>
          <p>Wing something</p>
          <p>somewhere</p>
        </div>

        <div>
          <h3>Review items and delivery</h3>
          {basket.map(item => (
            <CheckoutProduct
              id={item.id}
              info={item.info}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating} />
          ))}
        </div>

        <div className='bg-slate-100'>
          <h3>Payment method</h3>
        </div>

      </div>
    </>
  )
}
