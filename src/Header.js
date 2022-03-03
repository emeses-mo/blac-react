import React from 'react'
import cart from './images/sc.png'
import logo from './images/logo.png'
import profile from './images/user.png'
import {Link, useHistory} from 'react-router-dom'
import { useStateValue } from './StateProvider';
import { auth } from './Firebase';
function Header() {
    const [{basket, user}, dispatch] = useStateValue();
    const handleSignout =()=>{
      if(user){
        auth.signOut();
    }
    }
  return (
    <div>
        <div className="home_header">
             <div className="logo">
           <Link to="/">  <img src={logo} alt="" /></Link>    
             </div>
             <div className="nav">
                 <h1>Home</h1>
                 <h1>Shop</h1>
                 <h1>Categories</h1>
                
                 <h1>About</h1>
             </div>
             <div className="cartprf">
                 <div className="cart">
               <Link to='/cart'>  <img src={cart} alt="" /></Link>    
                        <span>{basket?.length}</span>
                 </div>
                 <div className="profile">
                   {
                     !user ? <Link to="/user-login">  <img src={profile} alt="" /></Link>  : <div onClick={handleSignout} className="logout"><h2>Logout</h2></div> 
                   }
               
                 </div>
             </div>
        </div>
    </div>
  )
}

export default Header