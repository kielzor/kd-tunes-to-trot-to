import React from 'react'
import './ImportContainer.css'

export const ImportContainer = () => {
  return (
    <div className='import-container'>
      <h1>Import Audio</h1>
      <div className='import-audio'>
        <input placeholder='Name'  className='import-input'/>
        <select className='import-input'>
          <option default>Speed</option>
          <option>Warmup/ Cooldown</option>
          <option>Jog</option>
          <option>Sprint</option>
        </select>
        <div>
          <input type='file' accept='audio/*' placholder='File' className='import-file-input'/>
          <button className='import-save-button'>Save</button>
        </div>
      </div>
    </div>
  )
}