import React,{useEffect,useState} from 'react'
import { storage,db,auth } from './Firebase';
import './ManageOrders.css'
function ManageOrders() {
    const [myorders,setMyOrders]= useState([])
    useEffect(()=>{
        db.collection("Orders").where("Fulfilled","==","No").onSnapshot((query)=>{
            const ords=[]
            query.forEach((doc)=>{
                ords.push(doc.data())
            })
            setMyOrders(ords)
        })
    },[])
    const setStatus =(id)=>{
        const up={
            Fulfilled:"SHIPPED"   
        }
        db.collection("Orders").doc(id).update(up).catch((err)=>{
            console.log(err)
        })

    }
  return (
    <div className='mo_main'>
        <h3>New Orders</h3>
        <div className="mo_orders">
        {
            myorders.map((orders)=>(
                <div className="neworder">
                    <h4>Order ID: {orders.OrderID}</h4>
                    { 
                    orders.Items.map((item)=>(
                        <div className="order_itemsbox">
                        <div className="order_car">
                          <h5>Order Summary</h5>
                            <div className="order_info">
                               <p>{item.title}</p>
                               <p> ₹{item.price}</p>
                            </div>
                        </div>
                    </div>
            ))
                        
                    }
                    <div className="set_status">
                        <button onClick={()=>setStatus(orders.OrderID)}>Ship</button>
                    </div>
                    
                </div>
            ))
        }
        </div>
    </div>
  )
}

export default ManageOrders