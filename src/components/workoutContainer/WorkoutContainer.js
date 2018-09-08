import React from 'react'
import './workoutContainer.css'

export const WorkoutContainer = () => {
  return (
    <div className='new-workout-container'>
      <h1>CREATE NEW WORKOUT</h1>
      <div className='workout-name'>
        <p>Name</p>
        <input className='workout-inputs'/>
        <p>Workout Length</p>
        <select className='workout-inputs'></select>
      </div>
      <h3>Set Warmup/ Cooldown Song</h3>
      <div className='new-workout-jog'>
        <div className='new-jog-sample'>
          <select className='sample-select'>
            <option default>Choose Sample</option>
          </select>
          <select className='sample-duration'>
            <option default>Length</option>
          </select>
          <button className='preview-button'>Preview</button>
          <button className='select-button'>Select</button>
        </div>
        <p>OR</p>
        <div className='new-jog-custom'>
          <select className='sample-select'>
            <option default>Choose Custom</option>
          </select>
          <select className='sample-duration'>
            <option default>Length</option>
          </select>
          <button className='preview-button'>Preview</button>
          <button className='select-button'>Select</button>
        </div>
      </div>
      <h3>Set Jog Song</h3>
      <div className='new-workout-jog'>
        <div className='new-jog-sample'>
          <select className='sample-select'>
            <option default>Choose Sample</option>
          </select>
          <select className='sample-duration'>
            <option default>Length</option>
          </select>
          <button className='preview-button'>Preview</button>
          <button className='select-button'>Select</button>
        </div>
        <p>OR</p>
        <div className='new-jog-custom'>
          <select className='sample-select'>
            <option default>Choose Custom</option>
          </select>
          <select className='sample-duration'>
            <option default>Length</option>
          </select>
          <button className='preview-button'>Preview</button>
          <button className='select-button'>Select</button>
        </div>
      </div>
      <h3>Set Sprint Song</h3>
      <div className='new-workout-jog'>
        <div className='new-jog-sample'>
          <select className='sample-select'>
            <option default>Choose Sample</option>
          </select>
          <select className='sample-duration'>
            <option default>Length</option>
          </select>
          <button className='preview-button'>Preview</button>
          <button className='select-button'>Select</button>
        </div>
        <p>OR</p>
        <div className='new-jog-custom'>
          <select className='sample-select'>
            <option default>Choose Custom</option>
          </select>
          <select className='sample-duration'>
            <option default>Length</option>
          </select>
          <button className='preview-button'>Preview</button>
          <button className='select-button'>Select</button>
        </div>
      </div>
      <button className='save-workout-button'>Save</button>
    </div>
  )
}