import React from 'react';
import "./Print.css";
import discussion from "../images/discussion.png";


export default function Offer() {
  return (
    <div className='print' >
        <div className='imagee' >
            <img src={discussion}/>
        </div>
        <div className='writing'>
            <div className='offer'>
            <h1>OFFERS <span>Online <br/>Courses</span></h1>
            <ul>
                <li>Fullstack</li>
                <li>Cloud Computing</li>
                <li>App Development</li>
                <li>C and C++</li>
                <li>Python</li>
                <li>Ethical Hacking</li>

            </ul>
            <button type='button'>For more</button>
            </div>

        </div>
    </div>
  )
}
