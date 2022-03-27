import React from 'react'
import './ProductDetailed.css'
import t1 from './images/t5.jpg'
import t2 from './images/t6.jpg'
function ProductDetailed() {
  return (
    <div className='detailed_main'>
    <div className="preview_images">
        <div className="pi1">
            <img src={t2} alt="" />
        </div>
        <div className="pi2">
        <img src={t1} alt="" />
        </div>
    </div>
    <div className="product_details">
        <div className="primary_details">
           <div className="ptitle">
               <p>Nike AF-1</p>
           </div>
            <p>Men's T-Shirt</p>
        </div>
        <div className="secondary_details">
            <div className="sd_price">
                 <p>$2495</p>
            </div>
           <div className="incl">
                <p>incl. of all taxes</p>
           </div>
           
        </div>
        <div className="select_size_cntr">
            <p>Select size</p>
            <div className="select_size">
                <button>S</button>
            <button>M</button>
            <button>L</button>
            <button>XL</button>
            </div>
            
        </div>
        <div className="add_product">
            <button>Add to Bag</button>
        </div>
        <div className="product_desc">
            <p>Made from heavyweight cotton in a roomy fit for premium comfort. This NIKE t-Shirt boldly celebrates the AirForce 1- an icon since 1982.</p>
        </div>
    </div>
    </div>
  )
}

export default ProductDetailed