import React from 'react'
import './Skills.css'

export default function Skills() {
  return (
    <div className='skill-container'>
        <div className='skill-header'>
            <h3>Skills</h3>
            <ul>
                <div id='bx-1'>
                    <li>
                        <img id='li-img1' src='html5-logo.png'></img>
                    </li>
                </div>
                <div id='bx-2'>
                    <li>
                        <img id='li-img2' src='css-logo.png'></img>
                    </li>
                </div>
                <div id='bx-3'>
                    <li>
                        <img id='li-img3' src='javascript-logo.png'></img>
                    </li>
                </div>
                <div id='bx-4'>
                    <li>
                        <img id='li-img4' src='react-logo.png'></img>
                    </li>
                </div>
                <div id='bx-5'>
                    <li>
                        <img id='li-img5' src='bootstrap-logo.png'></img>
                    </li>
                </div>
            </ul>
        </div>
    </div>
  )
}
