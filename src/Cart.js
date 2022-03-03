import React from 'react'
import CartItem from './CartItem';
import { useStateValue } from './StateProvider'
import './Cart.css'
function Cart() {
    const [{basket,user}, dispatch] = useStateValue();
  return (
    <div className='cart_main'>
            <h2>Hello ,{user?.email}</h2>
            <div className="cart-items">
                <h3>Your Cart</h3>
                <div className="cwrapper">
                     {
                   basket.length==0 ? <h2>Cart is Empty!</h2> :basket.map(item=>(
                        <CartItem 
                    id={item.id}
                    title={item.title}
                    image={item.image}
                    price={item.price}
                    />
                    ))
                    
                }
                </div>
               
            </div>
    </div>
  )
}

export default Cart