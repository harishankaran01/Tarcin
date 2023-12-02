import React from 'react';
import insta from '../images/instagram.png';
import facebook from '../images/facebook.png'
import github from '../images/github.png'
import linkedin from '../images/linked in.png'
import youtube from '../images/youtube.png';
import "./Links.css";
import { Link } from 'react-router-dom';



export default function Links() {
  return (
    <div className='links'>
        <h4>Our Social Media link</h4>
        <div className='socialmedia'>
          <Link to="https://www.instagram.com/tarcin_robotics.in/"><img src={insta}/></Link>
          <img src={facebook}/>
          <img src={github}/>
          <img src={linkedin}/>
          <img src={youtube}/>
        </div>
    </div>
  )
}
