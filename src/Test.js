import React,{useEffect,useState} from 'react'
import { storage,db,auth } from './Firebase';
function Test() {
const [orders,setOrders]=useState([])
useEffect(()=>{
    db.collection('Orders').onSnapshot((query)=>{
        const ord=[]
        query.forEach((doc)=>{
            ord.push(doc.data())
        })
        setOrders(ord)
    })
},[])
console.log("orders",orders)
  return (
    <div>
            {
                orders.map((o)=>(
                    <div className="ords">
                        <p>ID : {o.OrderID}</p>
                        <p>Items</p>
                        <p>{o.Items.map((item)=>(
                            <div className="its">
                                <h6>{item.title}</h6>
                            </div>
                        ))}</p>
                    </div>
                ))
            }
    </div>
  )
}

export default Test