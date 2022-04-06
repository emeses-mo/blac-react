import React from 'react'
import CartItem from './CartItem';
import { useStateValue } from './StateProvider'
import CurrencyFormat from "react-currency-format"
import './Cart.css'
import {Link} from 'react-router-dom'
import { getBasketTotal } from './reducer';
function Cart() {
    const [{basket,user}, dispatch] = useStateValue();
    let value= getBasketTotal(basket)
  return (
    <div className='cart_main'>

           
            <div className="cart-items">
              <div className="cart_header">
                <h3>Your Cart</h3>
                
              </div>
                

                <div className="cwrapper">
                     {
                   basket.length==0 ? <h2>Cart is Empty!</h2> :basket.map(item=>(
                        <CartItem 
                    id={item.id}
                    title={item.title}
                    image={item.image}
                    price={item.price}
                    size={item.size}
                    />
                    ))
                    

                }
                
                </div>
               
            </div>
            <div className="checkout_block">
              <div className="orderStatus">
             <Link to='/customer-dash'> <button>Order Status</button></Link>
              </div>
           <div className="subtotal">
               <h3>SubTotal</h3>
               <CurrencyFormat 
               renderText={(value)=>(
                 <>
                 <p>{`${value}`}</p>
                 </>
               )}
               decimalScale={2}
               value={getBasketTotal(basket)}
               displayType ={"text"}
                thousandSeparator={true}
                prefix = {"₹"}
               />
               
           </div>
           <div className="proceedTC">
             {
               user ?<Link to='/place-order'><button>Proceed to Checkout</button></Link>  :<Link to='/checkout'> <button>Proceed to Checkout</button></Link>  
             }
           
           </div>
       </div>
    </div>
  )
}

export default Cart