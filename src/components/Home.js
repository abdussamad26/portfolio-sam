import React from 'react'
import './Home.css'
import Typewriter from "typewriter-effect";
// import MenuIcon from '@mui/icons-material/Menu';

export default function Home() {

  return (
    <section className='container'>
        <div className='box'>
        
        </div>
      <div className='header'>
         <h1 className='text'>Abdus Samad</h1>
      </div>
      <div className='img1'>
       <img src="laptop-code.img.png"/>
      </div>
      <div className='img2'>
        <a href='https://github.com/abdussamad26'>
        <img id='gitimg' src='github-img1.png'></img>
        </a>
      </div>
      {/* <div className='icn'>
        <MenuIcon/>
      </div> */}
      <div className='typing'>
      <Typewriter
        onInit={(typewriter)=> {

        typewriter
        
        .typeString("Hello,Im Asamad")
          
        .pauseFor(1000)
        .deleteAll()
        .typeString("Welcomes You")
        .pauseFor(1000)
        .deleteAll()
        .typeString("Front-End-Developer")
        .start()
        }}
        />
      </div>
    </section>
  )
}
