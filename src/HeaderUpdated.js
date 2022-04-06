import React from 'react'
import cart from './images/sc.png'
import './HeaderUpdated.css'
import { auth } from './Firebase';
import {Link} from 'react-router-dom'
import { useHistory } from 'react-router-dom';
import { useStateValue } from './StateProvider';
function HeaderUpdated() {
  const [{basket, user}, dispatch] = useStateValue();
   const history = useHistory()
  const logout=()=>{
    if(user){
      auth.signOut();
      history.push('/')
  }
  }
  return (
    <div className='hu_main'>
        <div className="hu_logo">

        </div>
        <div className="hu_nav">
            <div className="hunav_items">
           <Link className='nodec' to='/men'><p>Men</p></Link>    
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
          <Link to='/mycart'>
        <img src={cart} alt="" />
        </Link>
        <p>{basket?.length}</p>
        {
          user ?  <h5 onClick={logout}>Logout </h5>: <Link to='/user-login'> <h5 >Login</h5></Link>
        }
      
        </div>
        </div>
    </div>
  )
}

export default HeaderUpdated