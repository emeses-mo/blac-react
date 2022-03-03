import React from 'react'

import model from './images/cta.jpg'
import {Link, useHistory} from "react-router-dom"

import './Home.css'
function Home() {
   
  return (
    <div className='home_main'>
        
        <div className="body">
            <div className="cta">
                <p>Create your own <span className='spcl'>visual style</span> . Let it be <span className="spcl">unique</span>  for yourself and yet identifiable for others.Check out our collection to identify who you are.</p>
             <Link to="/shop"><button>Shop Now</button></Link>  

            </div>
            <div className="cta_img">
               <div className="image">
                   <img src={model} alt="" />
               </div>
            </div>
        </div>
        
    </div>
  )
}

export default Home