import React, { useState } from 'react'
import './Switch.css'
import PropTypes from 'prop-types'



export default function (props) {
  return (
    <div >
      <div className='swtch'>
        <span style={{ color : props.mode ==="light" ? "yellow" : "grey"}}>☼</span>
        <div className='switch-checkbox'>
          <label className='switch'>
            <input onClick={props.toggleMode} type="checkbox" />
            <span className='slider round'></span>
          </label>
        </div>
        <span >☽</span>
      </div>
    </div>
  )
}
