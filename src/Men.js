import React ,{useState,useEffect} from 'react'
import { db } from './Firebase';
import Product from './Product'
import './Men.css'
import {Link} from 'react-router-dom'
import ProductCardNew from './ProductCardNew';
function Men() {
    const setPid =(pid)=>{
        localStorage.setItem("pid",JSON.stringify(pid))
    }
    const [products,setProducts]= useState([])
    useEffect(()=>{
        db.collection('Mens').onSnapshot((querySnapshot)=>{
            const prod=[]
            querySnapshot.forEach((doc)=>{
                prod.push(doc.data())
            })
            setProducts(prod)
        })
    },[])
    console.log("pr",products)
  return (
    <div className='men_main'>
            {/* {
                products.map((product)=>(
                    <Product id="1"  title={product.ProductName} image={product.url} price={product.Price}/>
                ))
                 
            } */}


            <div className="contentbar">
<h2>Men's Clothing</h2>
<div className="contentbar_items">
    <h4>Tops & Tshirts</h4>
    <h4>Hoodies & Sweatshirts</h4>
    <h4>Jackets & Gilets</h4>
    <h4>Trousers & Tights</h4>
    <h4>Tracksuits</h4>
    <h4>Shorts</h4>
</div>
            </div>
            <div className="shop_items">
                {
                    products.map((prod)=>(  
                        <Link className='no-dec' to='/product-details' onClick={()=>setPid(prod.ProductID)}>                        <ProductCardNew name={prod.ProductName} price={prod.Price} image={prod.url} /></Link>

                    ))
                }
                
               

            </div>
    </div>
  )
}

export default Men