import React from 'react'
import './ProductCardNew.css'
import { storage,db,auth } from './Firebase';
function ProductCardNew({name,price,image}) {
 
  
  return (
    <div className='pc_main'>
            <div className="pc_img">
              <img src={image} alt="" />
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