import React from 'react'
import './Brands.css'
import b1 from './images/Models/nike.png'
import b2 from './images/Models/gucci.png'
import b3 from './images/Models/sketchers.png'
import b4 from './images/Models/levis.png'
function Brands() {
  return (
    <div className='brands_main'>
        <div className="brands_wrapper">
            <div className="brand">
                <img src={b1} alt="" />
            </div>
            <div className="brand">
                <img src={b3} alt="" />
            </div>
            <div className="brand">
                <img src={b4} alt="" />
            </div>
            <div className="brand">
                <img src={b2} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Brands