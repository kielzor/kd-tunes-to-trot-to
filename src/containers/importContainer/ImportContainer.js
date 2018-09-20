import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { addUserFile } from '../../actions/index';
import './ImportContainer.css';

export class ImportContainer extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      speed: '',
      file: {}
    };
  }

	handleChange = (event) => {
	  const { name, value } = event.target;

	  this.setState({
	    [name]: value
	  });
	}

	handleSubmit = (event) => {
	  event.preventDefault();
	  this.props.addUserAudioFile(this.state);
	}

	render () {
	  return (
	    <div className='import-container'>
	      <form className='import-audio' onSubmit={this.handleSubmit}>
	      <h1>Import Audio</h1>
	        <input 
	          placeholder='Name' 
	          className='import-input'
	          name='name'
	          value={this.state.value}
	          onChange={this.handleChange}
	        />
	        <select 
	          className='import-input'
	          onChange={this.handleChange}
	          name='speed'
	          value={this.state.value}
	        >
	          <option default>Speed</option>
	          <option>Warmup/ Cooldown</option>
	          <option>Jog</option>
	          <option>Sprint</option>
	        </select>
	        <div>
	          <input 
	            type='file' 
	            accept='audio/*' 
	            placholder='File' 
	            className='import-file-input'
	            onChange={this.handleChange}
	            name='file'
	            value={this.state.value}
	          />
	          <button className='import-save-button'>Save</button>
	        </div>
	      </form>
	    </div>
	  );
	}
}

ImportContainer.propTypes = {
  addUserAudioFile: PropTypes.func
};

export const mapDispatchToProps = dispatch => ({
  addUserAudioFile: file => dispatch(addUserFile(file))
});

export default connect(null, mapDispatchToProps)(ImportContainer);