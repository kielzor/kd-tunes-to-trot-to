import React, { Component} from 'react'
import './header.css'
import { NavLink } from 'react-router-dom'

class Header extends Component {
  render() {
    return (
      <div>
        {!this.props.desktopClicked && <h1 className='header'>TUNES TO TROT TO</h1>}
        {this.props.desktopClicked && <h1 className='header'>Welcome: [ user ]</h1>}
        {/* {this.props.desktopClicked &&  */}
        <NavLink to='/'>
          <button onClick={() => this.props.handleDesktopClick('back')}>BACK</button>
        </NavLink>
      </div>
    )
  }
}
export default Header