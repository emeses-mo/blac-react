import React,{useState,useEffect} from 'react'
import './AdminCustom.css'
import pholder from './images/Models/mens.jpg'
import { storage,db,auth } from './Firebase';
function AdminCustom() {
    const [quote,setQuote]= useState([
        {quot:''}
    ])
    const [customOrders,setCustomOrders]=useState([])
    useEffect(()=>{
        db.collection("CustomOrders").where("OrderStatus","==","Pending Approval").onSnapshot((qs)=>{
            const cs=[]
            qs.forEach((doc)=>{
                cs.push(doc.data())
            })
            setCustomOrders(cs)
        })
    },[])
    console.log(customOrders)
    const updateStatus=(order)=>{
        const update={
            OrderStatus: "Quote Sent",
            Quote: quote,
        }
        db.collection("CustomOrders").doc(order.CustomID).update(update).catch((err)=>{
            console.log(err)
        })
        quote("")
    }
    
  return (
    <div className='ac_main'>
        {
            customOrders.length == 0 ? <p>No New Custom Orders</p> : <div>{
                customOrders.map((cus,index)=>(
                    <div className="custom_card" key={index} id={cus.CustomID}>
            <div className="c_img">
                <img src={cus.imgurl} alt="" />
            </div>
            <div className="c_content">
                <div className="custom_title">
                    <p>{cus.ProductName}</p>
                </div>
                <div className="custom_quote">
                    <p>Quote</p>
                    <input type="number" placeholder='$$$' name='quot' value={quote} onChange={e=>setQuote(e.target.value)}/>
                </div>
                <div className="custom_btn">
                    <button onClick={()=>updateStatus(cus)} >Send Quote</button>
                </div>
            </div>
        </div>
                ))
                }</div>
        }
        

    </div>
  )
}

export default AdminCustom