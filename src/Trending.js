import React from 'react'
import './Trending.css'
import tr1 from './images/Models/trending1.jpg'
import tr2 from './images/Models/trending2.jpg'
import tr3 from './images/Models/trending3.jpg'
function Trending() {
  return (
    <div className='trending_main'>
        <div className="trending_wrapper">
        <div className="trending_card">
            <div className="trending_img">
                <img src={tr1} alt="" />
            </div>
            <div className="trending_info">
                <div className="trending_title">
                    <h2>COUPLE T-SHIRT</h2>
                </div>
                <div className="trending_p">
                    <p>Lorem ipsum dolor sit amet <br /> consectetur adipisicing .</p>
                </div>
                <div className="trending_price">
                    <h2>$40.35</h2>
                </div>
            </div>
        </div>
        <div className="trending_card">
            <div className="trending_img">
                <img src={tr1} alt="" />
            </div>
            <div className="trending_info">
                <div className="trending_title">
                    <h2>COUPLE T-SHIRT</h2>
                </div>
                <div className="trending_p">
                    <p>Lorem ipsum dolor sit amet <br /> consectetur adipisicing .</p>
                </div>
                <div className="trending_price">
                    <h2>$40.35</h2>
                </div>
            </div>
        </div>
        <div className="trending_card">
            <div className="trending_img">
                <img src={tr1} alt="" />
            </div>
            <div className="trending_info">
                <div className="trending_title">
                    <h2>COUPLE T-SHIRT</h2>
                </div>
                <div className="trending_p">
                    <p>Lorem ipsum dolor sit amet <br /> consectetur adipisicing .</p>
                </div>
                <div className="trending_price">
                    <h2>$40.35</h2>
                </div>
            </div>
        </div>
        </div>
        
    </div>
  )
}

export default Trending