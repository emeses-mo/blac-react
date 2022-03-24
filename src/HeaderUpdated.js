import React from 'react'
import cart from './images/sc.png'
import './HeaderUpdated.css'
function HeaderUpdated() {
  return (
    <div className='hu_main'>
        <div className="hu_logo">

        </div>
        <div className="hu_nav">
            <div className="hunav_items">
                 <p>Men</p>
            <p>Women</p>
            <p>Kids</p>
            <p>Custom</p>
            </div>
           
        </div>
        <div className="hu_search-cart">
        <div className="hu_search">
            <input type="search" />
        </div>
        <div className="hu_cart">
        <img src={cart} alt="" />
        </div>
        </div>
    </div>
  )
}

export default HeaderUpdated