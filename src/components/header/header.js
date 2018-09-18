import React, { Component} from 'react';
import './header.css';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

class Header extends Component {
  render() {
    return (
      <div className='header-container'>
        {!this.props.loggedStatus && <div className='header-spacing'></div>}
        {this.props.loggedStatus && <h5 className='welcome-msg'>Welcome!</h5>}
        <h1 className='header'>TUNES TO TROT TO</h1>
        {this.props.loggedStatus && <div className='header-buttons'>
          <NavLink 
            className='logout-link'
            onClick={() => this.props.logOut()}
            to='/'
          >
            <button 
              name='logout-button'
              className='logout-button'>Log Out</button>
          </NavLink>
        </div>}
        {!this.props.loggedStatus && <div className='header-spacing'></div>}
      </div>
    );
  }
}

Header.propTypes = {
  loggedStatus: PropTypes.string,
  logOut: PropTypes.func
};

export default Header;