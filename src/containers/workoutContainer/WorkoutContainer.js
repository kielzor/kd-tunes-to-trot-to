import React, { Component } from 'react';
import './workoutContainer.css';
import { connect } from 'react-redux';
import { storeWorkout } from '../../actions/index';
import ReactPlayer from 'react-player';
import PropTypes from 'prop-types';


export class WorkoutContainer extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      totalLength: 0,
      warmupLength: 0,
      warmup: {},
      jogLength: 0,
      jog: {},
      sprintLength: 0,
      sprint: {},
      playing: ''
    };
  }

	handleChange = (e) => {
	  const { name, value } = e.target;

	  const custom = this.props.customFile.filter(file => value === file.name);

	  if (custom.length) {
	    this.setState({ [name]: custom[0].file });
	    return;
	  }

	  this.setState({
	    [name]: value
	  });
	}

	saveWorkout = (e) => {
	  e.preventDefault();
	  let newWorkout;

	  if (localStorage.length) {
	    const item = JSON.parse(localStorage.getItem('workout'));
	    newWorkout = [...item, this.state];
	  } else {
	    newWorkout = [this.state];
	  }

	  const id = 'workout';
	  const workout = JSON.stringify(newWorkout);
	  localStorage.setItem(id, workout);

	  this.setState({
	    playing: ''
	  });
		
	  this.props.addWorkout(this.state);
	  this.resetFields();
	}

	resetFields = () => {
	  this.setState({
	    name: '',
	    totalLength: 0,
	    warmupLength: 0,
	    warmup: {},
	    jogLength: 0,
	    jog: {},
	    sprintLength: 0,
	    sprint: {}
	  });
	}

	playPreview = (type, e) => {
	  e.preventDefault();
	  let preview = '';

	  if (type === 'warmup') preview = this.state.warmup;
	  if (type === 'jog') preview = this.state.jog;
	  if (type === 'sprint') preview = this.state.sprint;

	  this.setState({
	    playing: `https://freesound.org/apiv2/sounds/${preview}/download/`
	  });
	}

	render() {
	  return (
	    <form 
	      className='new-workout-container'
	      onSubmit={this.saveWorkout}
	    >
	      <ReactPlayer 
	        className='player'
	        url={this.state.playing}
	        height='50px'
	        playing 
	        controls
	      />
	      <h3>CREATE NEW WORKOUT</h3>
	      <div className='workout-name'>
	        <p>Name</p>
	        <input 
	          className='workout-inputs'
	          placeholder='Name'
	          name='name' 
	          value={this.state.name} 
	          onChange={this.handleChange}
	        />
	        <p>Workout Length</p>	
	        <select 
	          className='workout-inputs'
	          name='totalLength'
	          value={this.state.totalLength}
	          onChange={this.handleChange}
	        >
	          <option selected='selected'>Length</option>
	          <option>1:00:00</option>
	          <option>1:30:00</option>
	          <option>2:00:00</option>
	        </select>
	      </div>
	      <div className='speed-container'>
	        <h3>Set Warmup/ Cooldown Song</h3>
	      </div>
	      <div className='new-workout-jog'>
	        <div className='new-jog-sample'>
	          <select 
	            className='sample-select'
	            name='warmup'
	            value={this.state.warmup}
	            onChange={this.handleChange}
	          >
	            <option>Choose Sample</option>
	            {this.props.warmupFile.map((file, index) => {
	              return <option key={index}>{file.id}</option>;
	            })}
	          </select>
	        </div>
	        <p>OR</p>
	        <div className='new-jog-custom'>
	          <select 
	            className='sample-select'
	            name='warmup'
	            value={this.state.warmup}
	            onChange={this.handleChange}	
	          >
	            <option default>Choose Custom</option>
	            {this.props.customFile.filter(file => {
	              return file.speed === 'Warmup/ Cooldown';
	            }).map((warmup, index) => <option key={index}>{warmup.name}</option>)}
	          </select>
	          <select 
	            className='sample-duration'
	            name='warmupLength'
	            value={this.state.warmupLength}
	            onChange={this.handleChange}
	          >
	            <option selected='selected'>Length</option>
	            <option>3:00</option>
	            <option>5:00</option>
	            <option>10:00</option>
	          </select>
	          <button 
	            className='preview-button warmup-preview'
	            onClick={(event) => this.playPreview('warmup', event)}	
	          >Preview</button>
	        </div>
	      </div>
	      <div className='speed-container'>
	        <h3>Set Jog Song</h3>
	      </div>
	      <div className='new-workout-jog'>
	        <div className='new-jog-sample'>
	          <select 
	            className='sample-select'
	            name='jog'
	            value={this.state.jog}
	            onChange={this.handleChange}
	          >
	            <option>Choose Sample</option>
	            {this.props.jogFile.map((file, index) => {
	              return <option key={index}>{file.id}</option>;
	            })}
	          </select>
	        </div>
	        <p>OR</p>
	        <div className='new-jog-custom'>
	          <select 
	            className='sample-select'
	            name='jog'
	            value={this.state.jog}
	            onChange={this.handleChange}	
	          >
	            <option default>Choose Custom</option>
	            {this.props.customFile.filter(file => {
	              return file.speed === 'Jog';
	            }).map((warmup, index) => <option key={index}>{warmup.name}</option>)}
	          </select>
	        </div>
	        <select 
	          className='sample-duration'
	          name='jogLength'
	          value={this.state.jogLength}
	          onChange={this.handleChange}
	        >
	          <option selected='selected'>Length</option>
	          <option>1:00</option>
	          <option>1:30</option>
	          <option>2:00</option>
	        </select>
	        <button 
	          className='preview-button jog-preview'
	          onClick={(event) => this.playPreview('jog', event)}	
	        >Preview</button>
	      </div>
	      <div className='speed-container'>
	        <h3>Set Sprint Song</h3>
	      </div>
	      <div className='new-workout-jog'>
	        <div className='new-jog-sample'>
	          <select 
	            className='sample-select'
	            name='sprint'
	            value={this.state.sprint}
	            onChange={this.handleChange}
	          >
	            <option>Choose Sample</option>
	            {this.props.sprintFile.map((file, index) => {
	              return <option key={index}>{file.id}</option>;
	            })}
	          </select>
	        </div>
	        <p>OR</p>
	        <div className='new-jog-custom'>
	          <select 
	            className='sample-select'
	            name='sprint'
	            value={this.state.sprint}
	            onChange={this.handleChange}	
	          >
	            <option default>Choose Custom</option>
	            {this.props.customFile.filter(file => {
	              return file.speed === 'Sprint';
	            }).map((warmup, index) => <option key={index}>{warmup.name}</option>)}
	          </select>
	        </div>
	        <select 
	          className='sample-duration'
	          name='sprintLength'
	          value={this.state.sprintLength}
	          onChange={this.handleChange}
	        >
	          <option selected='selected'>Length</option>
	          <option>:30</option>
	          <option>:45</option>
	          <option>1:00</option>
	        </select>
	        <button 
	          className='preview-button sprint-preview'
	          onClick={(event) => this.playPreview('sprint', event)}		
	        >Preview</button>
	      </div>
	      <button className='save-workout-button'>Save</button>
	    </form>
	  );
	}
}

WorkoutContainer.propTypes = {
  sprintFile: PropTypes.array,
  jogFile: PropTypes.array
};

export const mapStateToProps = state => ({
  jogFile: state.JogPace,
  warmupFile: state.WarmupPace,
  sprintFile: state.SprintPace,
  customFile: state.CustomAudio
});

export const mapDispatchToProps = dispatch => ({
  addWorkout: file => dispatch(storeWorkout(file))
});

export default connect(mapStateToProps, mapDispatchToProps)(WorkoutContainer);