import React from 'react'
import './style.css';

export default function CustomInput(props) {
  return (
    <>
    <div className='custom-input' >
        <input className='custom-input-box' placeholder={props.placeholder}/>
        <label className='custom-label'>{props.label}</label>
    </div>
    </>
  )
}
