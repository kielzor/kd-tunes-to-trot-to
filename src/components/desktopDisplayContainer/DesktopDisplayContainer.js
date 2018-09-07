import React, { Component } from 'react'
import './DesktopDisplayContainer.css'
import { Link, Route } from 'react-router-dom';
import { ImportContainer } from '../importContainer/ImportContainer'
import { WorkoutContainer } from '../workoutContainer/WorkoutContainer'


class DesktopDisplayContainer extends Component {
  constructor() {
    super()
    this.state = {
      displayType: null
    }
  }

  render() {
    return (
      <div className='desktop-display'>
        <div className='desktop-button-parent'>
          <Link to='/workout'>
            <button className='desktop-container-button'
            onClick={this.props.handleDesktopClick}>CREATE NEW WORKOUT</button>
          </Link>
          <Link to='/import'>
            <button className='desktop-container-button'
            onClick={this.props.handleDesktopClick}>IMPORT TRACKS</button>
          </Link>
          <Link to='/new-song'>
            <button className='desktop-container-button'
            onClick={this.props.handleDesktopClick}>BUILD NEW SONG</button>
          </Link>
        </div>
      </div>
    )
  }
}

export default DesktopDisplayContainer