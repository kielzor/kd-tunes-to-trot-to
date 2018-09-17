import React, { Component } from 'react'
import './DesktopDisplayContainer.css'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

class DesktopDisplayContainer extends Component {
	render() {
		return (
			<div className='desktop-display'>
				<div className='desktop-button-parent'>
					<Link to='/workout'>
						<button className='desktop-container-button'
							onClick={this.props.handleDesktopClick}>CREATE NEW WORKOUT</button>
					</Link>
					<Link to='/music-player'>
						<button 
							className='music-player-route'
							onClick={this.props.handleDesktopClick}>MusicPlayer</button>
					</Link>
					<Link to='/import'>
						<button className='desktop-container-button'
							onClick={this.props.handleDesktopClick}>IMPORT TRACKS</button>
					</Link>
					{/* <Link to='/new-song'>
						<button className='desktop-container-button'
							onClick={this.props.handleDesktopClick}>BUILD NEW SONG</button>
					</Link> */}
				</div>
			</div>
		)
	}
}

DesktopDisplayContainer.propTypes = {
	handleDesktopClick: PropTypes.func
}

export default DesktopDisplayContainer