import React from 'react';
import "./Print.css";
import printi from '../images/printing.jpg'
export default function Print() {
  return (
    <div className='print'>
        <div className='writing'>'
        <h1>
            <span>3D Printing</span> Service</h1>
            <p>
                At the intersection of art, science, and engineering, 3D printing offers a transformative journey limited only by your imagination. It's a realm where you can sculpt personalized jewelry, engineer complex prototypes, reimagine fashion, and even print life-changing medical devices. Here, the only constraint is the extent of your creativity.
            </p>
            <button type='button'>For more</button>

        </div>
        <div className='imagee'>
            <img src={printi}/>
        </div>

    </div>
  )
}
