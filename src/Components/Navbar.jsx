import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Navbar.css';
import tarcin from '../images/tarcin.png'
import menu1 from '../images/menu.png'


export default function Navbar() {
   let [menu,setMenu]=React.useState(false);
  return (
    <nav> 
       <Link to="/"><img src={tarcin}/></Link>
       
       <div className='menu' onClick={()=>{
        setMenu(prev=>{
          return !prev;
        })
       }}>
        {/* <span></span>
         <span></span>
          <span></span> */}
          <img src={menu1}/>
       </div>
  
    <ul className={menu ? "open" : ""}>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/Courses">Courses</NavLink>
      </li>
      <li>
        <NavLink to="/blog">Blog</NavLink>
      </li>
      <li>
        <NavLink to="/About">About us</NavLink>
      </li>
    </ul>
   </nav>
  )
}
// import React from 'react';

// import { Link } from 'react-router-dom';

// import Courses from '../pages/Courses';


// export default function Navbar1() {
//   return (
  //  <nav>
  //   <Link to="/"><img src={require("../images/tarcin.png")}/></Link>
  //   <ul>
  //     <li>
  //       <Link to="/Courses">Courses</Link>
  //     </li>
  //     <li>
  //       <Link to="/blog">Blog</Link>
  //     </li>
  //     <li>
  //       <Link to="/About">About us</Link>
  //     </li>
  //   </ul>
  //  </nav>

//   )
// }

