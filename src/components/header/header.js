import React, { Component} from 'react'
import './header.css'
import { NavLink } from 'react-router-dom'

class Header extends Component {
	render() {
		return (
			<div className='header-container'>
				{!this.props.loggedStatus && <div className='header-spacing'></div>}
				{this.props.loggedStatus && <h5 className='welcome-msg'>Welcome: [ user ]</h5>}
				<h1 className='header'>TUNES TO TROT TO</h1>
				{this.props.loggedStatus && <div className='header-buttons'>
				<NavLink to='/'>
					<button onClick={() => this.props.logOut()}>Log Out</button>
				</NavLink>
				</div>}
				{!this.props.loggedStatus && <div className='header-spacing'></div>}
			</div>
		)
	}
}
export default Header