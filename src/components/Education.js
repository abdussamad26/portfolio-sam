import React from 'react'
import './Education.css'
export default function Education() {
  return (
    <div className='container'>
       <div id='ed-text'>
        <h3>Education</h3>
       </div>
       <div className='ed-line'></div>
       <div className='circle1'>
          <img id='circle-logo1' src='react-logo.png'></img>
          <b id='year-school'>5.2021</b>
          <div className='frntend-card'>
          <b id='card-frntend-text'>FrontEnd-Developer Course</b>
          <p id='card-para'>ByteCode Bootcamp</p>
          <ul className='card-list'>
            <li id='li-1' className='list-card-edu'>HTML & CSS</li>
            <li id='li-2' className='list-card-edu'>JavaScript</li>
            <li id='li-3' className='list-card-edu'>Bootstrap</li>
            <li id='li-4' className='list-card-edu'>AJAX</li>
            <li id='li-5' className='list-card-edu'>JSON</li>
            <li id='li-6' className='list-card-edu'>API</li>
            <li id='li-7' className='list-card-edu'>React JS</li>
          </ul>
        </div>
       </div>
       <div className='circle2'>
        <img id='circle-logo2' src='react-logo.png'></img>
        <b id='year-college'>2020-2022</b>
        <div className='college-card'>
          <b id='cc-text'>Vidyalankar Polytechnic Institute</b>
          <p id='cc-para'>3 years diploma</p>
        </div>
       </div>
       <div className='circle3'>
        <img id='circle-logo3' src='hourglass-logo.png'></img>
       </div>
    </div>
  )
}
