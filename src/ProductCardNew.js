import React from 'react'
import './ProductCardNew.css'
import { storage,db,auth } from './Firebase';
function ProductCardNew({name,price,image}) {
 
  
  return (
    <div className='pc_main'>
            <div className="pc_img">
                <img src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/3591b758-8792-491f-b568-de743899ea1a/liverpool-fc-fleece-pullover-hoodie-94NTKq.png" alt="" />
            </div>
            <div className="pc_info">
                <h3>{name}</h3>
                <div className="pc_sec">
                  <p>Men's T-Shirt</p>
                <p>2 Colours</p>
                <div className="black">
                    <p >$ {price}</p>
                </div>
                
                </div>
                
            </div>
    </div>
  )
}

export default ProductCardNew