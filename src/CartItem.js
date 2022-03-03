import React from 'react'
import trash from './images/trash.png'
import './CartItem.css'
import { useStateValue } from './StateProvider'
function CartItem({ id,image,title,price }) {
    const [{basket},dispatch] = useStateValue();
    const removeFB = () =>{
        dispatch({
            type: 'REMOVE_FROM_B',
            id: id,
        })
}
  return (
    <div className='cartItem_main' id={id}>
        <div className="ci_card" >
            <div className="ci_img">
                <img src={image} alt="" />
            </div>
            <div className="ci_info">
                <div className="ci_name">
                    <h3>{title}</h3>
                </div>
                <div className="ci_price">
                    <h2>₹{price} </h2>
                </div>

            </div>
            <div className="ci_remove">
                <img onClick={removeFB} src={trash} alt="" />
            </div>
        </div>
    </div>
  )
}

export default CartItem