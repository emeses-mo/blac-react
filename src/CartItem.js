import React from 'react'
import trash from './images/trash.png'
import './CartItem.css'
import { useStateValue } from './StateProvider'
function CartItem({ id,image,title,price,size }) {
    const [{basket},dispatch] = useStateValue();
    const removeFB = () =>{
        dispatch({
            type: 'REMOVE_FROM_B',
            id: id,
        })
}
  return (
    <div className='cartItem_main' >
       <div className="ci_card" id={id}>
           <div className="ci_img">
              <img src={image} alt="" />
           </div>
           <div className="ci_blocks">
               <div className="ci_info">
                    <div className="ci_primary">
                        <p>{title}</p>
                    </div>
                    <div className="ci_price">
                        <p>₹{price}</p>
                    </div>
           </div>
           <div className="ci_extras">
               <div className="ci_size">
                   <p>{size}</p>
               </div>
               <div className="ci_delete">
                   <img src={trash} alt=""  onClick={removeFB}/>
               </div>
           </div>

           </div>
           
       </div>
       
        </div>
  )
}

export default CartItem