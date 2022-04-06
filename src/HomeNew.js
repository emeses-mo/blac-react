import React from 'react'
import f1 from './images/shoes.jpg'
import f2 from './images/pants.jpg'
import f3 from './images/third.jpg'
import './Homenew.css'
import HeaderUpdated from './HeaderUpdated';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
function HomeNew() {
  return (
    <div className='home_main'>
        <HeaderUpdated />
        <Carousel>
                <div>
                    <img src={f1} />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src={f2} />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src={f3} />
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>
    </div>
  )
}

export default HomeNew