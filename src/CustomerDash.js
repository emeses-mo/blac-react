import React,{useEffect,useState} from 'react'
import { storage,db,auth } from './Firebase';
import { useStateValue } from './StateProvider';
import './CustomerDash.css'
function CustomerDash() {
    const [orders,setOrders]=useState([])
    const [{basket, user}, dispatch] = useStateValue();
    useEffect(()=>{
        db.collection('Orders').where("CustomerEmail","==",user?.email).onSnapshot((query)=>{
            const ord=[]
            query.forEach((doc)=>{
                ord.push(doc.data())
            })
            setOrders(ord)
        })
    },[])
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
                                        <p>{item.price}</p>
                                        <p>{item.size}</p>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default CustomerDash