import React from 'react'
import './AboutMe.css'
export default function AboutMe(props) {
  return (
    <div className='container'>
        <section id='about'>
                <h3>About Me</h3>
        </section>
        <div className='abt-img'>
          <img id='prg-img' src='programmer-img.jpg'></img>
        </div>
        <div class="card">
            <div class="card-header">
                <img id='macbtn' src='mac-btn.jpg'></img>
            </div>
            <div class="card-body">
                <h5 class="card-title">Special title treatment</h5>
                <p class="card-text">Hello! My name is Abdus Samad and I enjoy creating things that live on the internet.</p>
            </div>
        </div>
    </div>
  )
}
