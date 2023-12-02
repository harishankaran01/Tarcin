import React from 'react'
import robot from '../images/robot.png';
import net from '../images/Networkicon.png';
import indus from '../images/industryicon.png';

import './Card.css'
import './Services.css'
export default function Card(props) {
  let str={
    backgroundColor: props.im ==1? "#6071e6" :"#e69135" 
  }



  return (
    
    <div className='card'>
      <div className='imd'>
           <img src={ props.im== 1 ? robot: props.im ==2? net : indus }  alt='Robot' />
      </div>
     
   
     <h3>{props.head}</h3>
     <p>{props.para}</p>
    </div>
  )
}
