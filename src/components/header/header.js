import React, { Component} from 'react'
import './header.css'
import { NavLink } from 'react-router-dom'

class Header extends Component {
  render() {
    return (
      <div className='header-container'>
        {!this.props.desktopClicked && <h1 className='header'>TUNES TO TROT TO</h1>}
        {this.props.desktopClicked && <h5 className='welcome-msg'>Welcome: [ user ]</h5>}
        <div>
          {this.props.desktopClicked && 
            <NavLink to='/desktop-controller'>
              <button onClick={() => this.props.handleDesktopClick('back')}>Back</button>
            </NavLink>}
          {this.props.loggedStatus.length && 
            <NavLink to='/'>
              <button onClick={this.props.logOut}>Log Out</button>
            </NavLink>}
        </div>
      </div>
    )
  }
}
export default Header