import React from 'react'
import { useStateValue } from './StateProvider'
import './Product.css'
function Product({id,title,image,price}) {
    const [{basket},dispatch] = useStateValue();
    console.log("Basket>",basket)
    const addToBasket =()=>{
   
        dispatch({
            type: 'ADD_TO_BASKET',
            item:{
                id:  id,
                title: title,
                image: image,
                price: price,
               
            }
        })
    }
  return (
    <div className='product_main'>
        <div className="pimage">
            <img src={image} alt="" />
        </div>
            <div className="pinfo">
                <div className="ptitle">
                    <p>{title}</p>
                </div>
                
                <div className="price">
                    <p>₹{price}</p>
                </div>

                
            </div>
            <div className="addtocart">
                <button onClick={addToBasket}>Add To Cart</button>
            </div>
    </div>
  )
}

export default Product