import React,{useEffect,useState} from 'react'
import { storage,db,auth } from './Firebase';
import {OBJModel} from 'react-3d-viewer'
import { ObjViewer } from 'react-obj-viewer'
import tshirt from "./images/3d/kicks.obj"
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
        <h1>h3l</h1>
        <ObjViewer 
        model={tshirt}
        width={400}
        height={400}
    />
    </div>
  )
}

export default Test