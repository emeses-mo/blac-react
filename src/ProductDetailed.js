import React,{useEffect,useState} from 'react'
import './ProductDetailed.css'
import t1 from './images/t5.jpg'
import t2 from './images/t6.jpg'
import { useStateValue } from './StateProvider'
import { storage,db,auth } from './Firebase';
import {useHistory} from 'react-router-dom'
function ProductDetailed() {
    const history = useHistory()
    const [{basket},dispatch] = useStateValue();
    const [details,setDetails]=useState([])
    const [size,setSize]= useState('')
    console.log("Basket>",basket)
    const addToBasket =()=>{
   
        dispatch({
            type: 'ADD_TO_BASKET',
            item:{
                id: details[0].ProductID ,
                title: details[0].ProductName,
                image: details[0].url,
                price: parseInt( details[0].Price),
                size:size,
                
               
            }
        })
        history.push('/men')
    }
    console.log('Cart',basket)
    const pid =localStorage.getItem('pid').replace(/"/g, "")
    
    useEffect(()=>{
        db.collection('Mens').where("ProductID","==",pid).onSnapshot((querySnapshot)=>{
            const acc=[]
            querySnapshot.forEach((doc)=>{
              acc.push(doc.data())
            })
            setDetails(acc)
            
          })
    },[])
    console.log("details",details)
    const prodSize =(size)=>{
        setSize(size)
    }
  return (
    <div >
        {
            details.map((pd)=>(
                <div className="detailed_main">
 <div className="preview_images">
        <div className="pi1">
            <img src={pd.url} alt="" />
        </div>
        <div className="pi2">
        <img src={t1} alt="" />
        </div>
    </div>      
    
    <div className="product_details">
        <div className="primary_details">
           <div className="ptitle">
               <p>{pd.ProductName}</p>
           </div>
            <p>Men's T-Shirt</p>
        </div>
        <div className="secondary_details">
            <div className="sd_price">
                 <p>$ {pd.Price}</p>
            </div>
           <div className="incl">
                <p>incl. of all taxes</p>
           </div>
           
        </div>
        <div className="select_size_cntr">
            <p>Select size</p>
            <div className="select_size">
                <button onClick={()=>prodSize("Small")}>S</button>
            <button onClick={()=>prodSize("Medium")}>M</button>
            <button onClick={()=>prodSize("Large")}>L</button>
            <button onClick={()=>prodSize("Extra-Large")}>XL</button>
            </div>
            
        </div>
        <div className="add_product">
            <button onClick={addToBasket}>Add to Bag</button>
        </div>
        <div className="product_desc">
            <p>{pd.desc}</p>
        </div>
    </div>
                </div>
                
            ))
        }
   
    </div>
  )
}

export default ProductDetailed