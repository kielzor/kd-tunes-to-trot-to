import React, { Component } from 'react'
import './DesktopDisplayContainer.css'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

class DesktopDisplayContainer extends Component {
	render() {
		return (
			<div className='desktop-display'>
				<div className='desktop-button-parent'>
					<Link 
						className='desktop-link-workout'
						to='/workout'
						onClick={this.props.handleDesktopClick}
					>
						<button className='desktop-container-button'>CREATE NEW WORKOUT</button>
					</Link>
					<Link 
						className='desktop-link-player'
						to='/music-player'
						onClick={this.props.handleDesktopClick}
					>
						<button className='music-player-route'>MusicPlayer</button>
					</Link>
					<Link 
						className='desktop-link-import'
						to='/import'
						onClick={this.props.handleDesktopClick}
					>
						<button className='desktop-container-button'>IMPORT TRACKS</button>
					</Link>
				</div>
			</div>
		)
	}
}

DesktopDisplayContainer.propTypes = {
	handleDesktopClick: PropTypes.func
}

export default DesktopDisplayContainer