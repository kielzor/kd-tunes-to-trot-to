import React, { Component } from 'react'
import './workoutContainer.css'
import { connect } from 'react-redux'

class WorkoutContainer extends Component {
	constructor() {
		super()
		this.state = {
			name: '',
			totalLength: 0,
			warmupLength: 0,
			warmup: {},
			jogLength: 0,
			jog: {},
			sprintLength: 0,
			sprint: {}
		}
	}

	handleChange = (e) => {
		const { name, value } = e.target

		this.setState ({
			[name]: value
		})
	}

	render() {
		return (
			<div className='new-workout-container'>
				<h3>CREATE NEW WORKOUT</h3>
				<div className='workout-name'>
					<p>Name</p>
					<input 
						className='workout-inputs'
						name='name' 
						value={this.state.value} 
						onChange={this.handleChange}
					/>
					<p>Workout Length</p>	
					<select 
						className='workout-inputs'
						name='totalLength'
						value={this.state.value}
						onChange={this.handleChange}
					>
						<option>30 Minutes</option>
						<option>45 Minutes</option>
						<option selected='selected'>1 Hour</option>
						<option>1:15</option>
						<option>1:30 </option>
						<option>1:45</option>
						<option>2:00</option>
					</select>
				</div>
				<div className='speed-container'>
					<h3>Set Warmup/ Cooldown Song</h3>
					<select 
						className='sample-duration'
						name='warmupLength'
						value={this.state.value}
						onChange={this.handleChange}
					>
						<option selected='selected'>Length</option>
						<option>2:00</option>
						<option>3:00</option>
						<option>4:00</option>
						<option>5:00</option>
						<option>10:00</option>
					</select>
				</div>
				<div className='new-workout-jog'>
					<div className='new-jog-sample'>
						<select className='sample-select'>
							<option>Choose Sample</option>
						</select>
						<button className='preview-button'>Preview</button>
						<button className='select-button'>Select</button>
					</div>
					<p>OR</p>
					<div className='new-jog-custom'>
						<select className='sample-select'>
							<option default>Choose Custom</option>
						</select>
						<button className='preview-button'>Preview</button>
						<button className='select-button'>Select</button>
					</div>
				</div>
				<div className='speed-container'>
					<h3>Set Jog Song</h3>
					<select 
						className='sample-duration'
						name='jogLength'
						value={this.state.value}
						onChange={this.handleChange}
					>
						<option selected='selected'>Length</option>
						<option>:30</option>
						<option>:45</option>
						<option>1:00</option>
						<option>1:30</option>
						<option>2:00</option>
					</select>
				</div>
				<div className='new-workout-jog'>
					<div className='new-jog-sample'>
						<select className='sample-select'>
							<option>Choose Sample</option>
							{/* {this.props.audioFile.map(file => <option>file</option>)} */}
						</select>
						<button className='preview-button'>Preview</button>
						<button className='select-button'>Select</button>
					</div>
					<p>OR</p>
					<div className='new-jog-custom'>
						<select className='sample-select'>
							<option default>Choose Custom</option>
						</select>
						<button className='preview-button'>Preview</button>
						<button className='select-button'>Select</button>
					</div>
				</div>
				<div className='speed-container'>
					<h3>Set Sprint Song</h3>
					<select 
						className='sample-duration'
						name='sprintLength'
						value={this.state.value}
						onChange={this.handleChange}
					>
						<option selected='selected'>Length</option>
						<option>:15</option>
						<option>:30</option>
						<option>:40</option>
						<option>:50</option>
						<option>1:00</option>
					</select>
				</div>
				<div className='new-workout-jog'>
					<div className='new-jog-sample'>
						<select className='sample-select'>
							<option>Choose Sample</option>
						</select>
						<button className='preview-button'>Preview</button>
						<button className='select-button'>Select</button>
					</div>
					<p>OR</p>
					<div className='new-jog-custom'>
						<select className='sample-select'>
							<option default>Choose Custom</option>
						</select>
						<button className='preview-button'>Preview</button>
						<button className='select-button'>Select</button>
					</div>
				</div>
				<button className='save-workout-button'>Save</button>
			</div>
		)
	}
}

const mapStateToProps = state => ({
	audioFile: state.CustomAudioReducer
})

export default connect(mapStateToProps)(WorkoutContainer)