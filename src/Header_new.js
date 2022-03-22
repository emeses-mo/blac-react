import React from 'react'
import ham from './images/menu.png'
import './Header_new.css'
import {Link} from 'react-router-dom'
import cart from './images/sc.png'
import search from './images/search.png'
function Header_new() {
  return (
    <div className='header_new'>
        <div className="header_ham">
            <img src={ham} alt="" />
        </div>
        <div className="header_nav">
            <p>HOME</p>
          <Link to='/men'><p>MEN</p></Link>  
            <p>WOMEN</p>
            <p>KIDS</p>
            <p>SHOES</p>
            <p>HELP</p>
        </div>
        <div className="header_search">
            <input type="search" name="" id="" />
            <img src={search} alt="" />
        </div>
        <div className="header_cart">
            <img src={cart} alt="" />
        </div>
    </div>
  )
}

export default Header_new