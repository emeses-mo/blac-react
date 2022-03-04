import React from 'react'
import './MainCTA.css'
import model from './images/ctamodel.png'
function MainCTA() {
  return (
    <div className='cta_main'>
        <div className="cta_text">
            <p>Fashion is what you're offered <br /> four times a year by designers. </p>
            <div className="cta_button">
                <button>SHOP NOW</button>
            </div>
        </div>
        <div className="cta_model">
            <img src={model} alt="" />
        </div>
    </div>
  )
}

export default MainCTA