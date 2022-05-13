import React,{useEffect,useState} from 'react'
import { storage,db,auth } from './Firebase';
import { useStateValue } from './StateProvider';
import './CustomerDash.css'
function CustomerDash() {
    const [orders,setOrders]=useState([])
    const [customorders,setCustomorders]=useState([])
    const [{basket, user}, dispatch] = useStateValue();
    useEffect(()=>{
        db.collection('Orders').where("CustomerEmail","==",user?.email).onSnapshot((query)=>{
            const ord=[]
            query.forEach((doc)=>{
                ord.push(doc.data())
            })
            setOrders(ord)
        })
        db.collection('CustomOrders').where("CustomerID","==",user?.uid).onSnapshot((query)=>{
            const ord=[]
            query.forEach((doc)=>{
                ord.push(doc.data())
            })
            setCustomorders(ord)
        })
    },[])
    const cancelOrder=(order)=>{
        db.collection('Orders').doc(order.OrderID).delete()
    }
    const cancelCustom=(order)=>{
        db.collection('CustomOrders').doc(order.CustomID).delete()
    }
    const acceptquote=(order)=>{
        const up ={
            OrderStatus:"Approved"
        }
        db.collection("CustomOrders").doc(order.CustomID).update(up).catch((err)=>{
            console.log(err)
        })
    }
  return (
    <div className='cd_main'>
        <h3>Your orders</h3>
        <div className="cd_orders">
            {
                orders.map((o)=>(
                    <div className="orderbox" id={o.OrderID}>
                        <h3>OrderID : {o.OrderID}</h3>
                        <p>Shipped : {o.Fulfilled}</p>
                        {
                            o.Items.map((item)=>(
                                <div className="ordItems">
                                    <div className="ord_img">
                                        <img src={item.image} alt="" />
                                    </div>
                                    <div className="ord_details">
                                        <p>{item.title}</p>
                                        <p>₹{item.price}</p>
                                        <p>{item.size}</p>
                                    </div>
                                </div>
                            ))
                        }
                        <div className="cancel_order">
                            <button onClick={()=>cancelOrder(o)}>Cancel Order</button>
                        </div>
                    </div>
                ))
            }
        </div>
        <div className="cu_csord">
           {
               customorders.map((order)=>(
                   <div className="orderbox">
                       <h3>Order ID : {order.CustomID}</h3>
                       <p>Order Status : {order.OrderStatus}</p>
                       <div className="ordItems">
                           <div className="ord_img">
                               <img src={order.imgurl} alt="" />
                           </div>
                           <div className="ord_details">
                               <p>{order.ProductName}</p>
                               <div>{order.Quote == '' ? null : <h4>Price Quote : ₹{order.Quote}</h4>}</div>
                           </div>
                       </div>
                       <div className="cancel_custom">
                            <button onClick={()=>cancelCustom(order)}>Cancel Order</button>
                            {
                                order.OrderStatus == "Approved" ? null :  <button id='green' onClick={()=>acceptquote(order)}>Accept</button>
                            }
                            
                        </div>
                   </div>
               ))
           }
        </div>
    </div>
  )
}

export default CustomerDash