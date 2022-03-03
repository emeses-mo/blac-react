import React from 'react'
import cart from './images/sc.png'
import logo from './images/logo.png'
import profile from './images/user.png'
import Product from './Product'
import hoodie from './images/hoodie.jpg'
import './Shop.css'
function Shop() {
  return (
    <div className='shopMain'>
        
        <div className="shop">
                 <h1>Shop Now</h1>
                 <div className="products_wrapper">
                     <Product id="1"  title="Grey Hoodie" image={hoodie} price={700}/>
                     <Product id="1"  title="Grey Hoodie" image={hoodie} price={700}/>
                     <Product id="1"  title="Grey Hoodie" image={hoodie} price={700}/>
                     <Product id="1"  title="Grey Hoodie" image={hoodie} price={700}/>
                     <Product id="1"  title="Grey Hoodie" image={hoodie} price={700}/>
                     
                 </div>
             </div>
    </div>
  )
}

export default Shop