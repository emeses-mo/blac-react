import React ,{useState,useEffect} from 'react'
import { db } from './Firebase';
import Product from './Product'
function Men() {
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
  return (
    <div>
        <h1>Men (Products)</h1>
            {
                products.map((product)=>(
                    <Product id="1"  title={product.ProductName} image={product.url} price={product.Price}/>
                ))
                 
            }
    </div>
  )
}

export default Men