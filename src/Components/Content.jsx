// import React from 'react';
// import './Content.css';

// export default function Content() {
//   return (
//     <div className='content'>
//       <div className='leftcol'>
//       <h1><span>Learn</span> With Hands on </h1>
//       <h1>Projects</h1>
//       <h3>Tarcin is an interesting platform that will teach you in</h3>
//       <h3>more an interactive way</h3>
//       <button>Whatsapp</button>
//       </div>
//       <div className='rightcol'>

//       </div>
//     </div>
//   )
// }
import React from 'react'
import girl from '../images/girl.png'
import calendar from '../images/calendar.png'
import uxclass from '../images/uxclass.jpg'
import congrat from '../images/congrat.jpg'
import './Content.css'

export default function Content() {
  return (
    <div className='cont'>
    <div className='box'>
        <div className='content'>
            <h1><span>Learn </span>With Hands on</h1>
            <h1>Projects</h1><br/>
            <h2>Tarcin is an interesting platform that will teach you in more an interactive way</h2><br/>
            <div className='button'>
              <button className='social'>Whatsapp</button>
            </div>
            
        </div> 

       <div className='right-content'>
          <div className='image'>
               <img src={girl} className='girl' alt='girl'/>   
          </div>
          <div className='floating'>
          <div className='floating-1'><img src={calendar}  alt='calendar'/></div>
          <div className='floating-2'><img src={congrat} alt='congrat'/></div>
          <div className='floating-3'><img src={uxclass}  alt='ux-class'/></div></div>
          {/* <div className='floating-4'>5000+<br/>Assisted Students</div> */}
       </div>
     </div>  
     </div>
 
)
}
