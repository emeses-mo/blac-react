import React,{useEffect,useState} from 'react'
import './PlaceOrder.css'
import CartItem from './CartItem';
import { db } from './Firebase';
import { useStateValue } from './StateProvider';
import CurrencyFormat from "react-currency-format"
import { getBasketTotal } from './reducer';
import { v4 as uuidv4 } from "uuid";
import {useHistory} from 'react-router-dom'
function PlaceOrder() {
    const history= useHistory()
    const [disable,setDisable]=useState(false)
    const [{basket, user}, dispatch] = useStateValue();
    const [addy,setAddy]=useState([])
    useEffect(()=>{
        db.collection(user.email).onSnapshot((querySnapshot)=>{
            const add=[]
            querySnapshot.forEach((doc)=>{
                add.push(doc.data())
            })
            setAddy(add)
        })
    },[])
    console.log("Address",addy)
    const placeOrder =(e)=>{
        e.preventDefault()
        const orderid = uuidv4()
        db.collection('Orders').doc(orderid).set({
            OrderID:orderid,
            Fulfilled:'No',
            Items: basket,
            CustomerEmail:user.email,

        })
        console.log("Placed")
        history.push('/customer-dash')
        basket.length =0
    }
  return (
    <div className='po_main'>
        
        <div className="po_block">
        <h2>Hey {user?.displayName} , ready to place your order?</h2>
            <div className="po_subtotal">
            
            <h3>Subtotal</h3>
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
        <div className="po_itemwrapper">
            <div className="po_items">
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
        </div>
        <div className="po_block pb" >
                    <div className="po_address">
                        <h3>Delivery Address</h3>
                        {
                            addy.map((address)=>(
                                 <div className="addyblock">
                                <p>{address.Address}</p>
                            </div>
                            ))
                           
                        }
                    </div>
                    <div className="po_placeorder">
                      {
                          basket.length == 0 ? <button disabled={true} onClick={placeOrder}>Place Order</button> :<button disabled={false} onClick={placeOrder}>Place Order</button>
                      }  
                    </div>

        </div>
        
        
    </div>
  )
}

export default PlaceOrder