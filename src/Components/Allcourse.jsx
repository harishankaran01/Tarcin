import React from 'react';
import "./Print.css";
import int from "../images/integrations.png"

export default function Allcourse() {
  return (
    <div className='print'>
    <div className='imagee'>
        
        <img src={int} />
    </div>
    <div className='writing'>
    <div className='all'>
        <h6>__________Courses</h6>
        <h1>20+ Proffessional Courses</h1>
        <p>Schoology has every tool your classroom needs and comes pre-integrated with more than 200+ tools, student information systems (SIS), and education platforms.</p>
        <button>All Courses</button>    
    </div>
    </div>
    </div>
  )
}
