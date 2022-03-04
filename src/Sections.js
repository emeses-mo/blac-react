import React from 'react'
import './Sections.css'
import s1 from './images/Models/mens.jpg'
import s2 from './images/Models/women.jpg'
import s3 from './images/Models/kids.jpg'
import s4 from './images/Models/pets.jpg'
function Sections() {
  return (
    <div className='sections_main'>
        <div className="sections_wrapper">
            <div className="sectionCard">
            <div className="section_img">
                <img src={s1} alt="" />
            </div>
            <div className="section_title">
                <h2>MEN'S SECTION</h2>
            </div>
        </div>
        <div className="sectionCard">
            <div className="section_img">
                <img src={s1} alt="" />
            </div>
            <div className="section_title">
                <h2>MEN'S SECTION</h2>
            </div>
        </div>
        <div className="sectionCard">
            <div className="section_img">
                <img src={s1} alt="" />
            </div>
            <div className="section_title">
                <h2>MEN'S SECTION</h2>
            </div>
        </div>
        <div className="sectionCard">
            <div className="section_img">
                <img src={s1} alt="" />
            </div>
            <div className="section_title">
                <h2>MEN'S SECTION</h2>
            </div>
        </div>
        </div>
        
    </div>
  )
}

export default Sections