import React, { Component } from 'react'
import './workoutContainer.css'
import { connect } from 'react-redux'
import { storeWorkout } from '../../actions/index'

export class WorkoutContainer extends Component {
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
			sprint: {},
		}
	}

	handleChange = (e) => {
		const { name, value } = e.target

		this.setState ({
			[name]: value,
		})
	}

	saveWorkout = (e) => {
		e.preventDefault()
		let newWorkout
		if (localStorage.length) {
			const item = JSON.parse(localStorage.getItem('workout'))
			newWorkout = [...item, this.state]
		} else newWorkout = [this.state]

		const id = 'workout'
		const workout = JSON.stringify(newWorkout)
		localStorage.setItem(id, workout)
		this.props.addWorkout(this.state)
	}

	render() {
		return (
			<form 
				className='new-workout-container'
				onSubmit={this.saveWorkout}
			>
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
						<option selected='selected'>Workout Length</option>
						<option>1:00:00</option>
						<option>1:30:00</option>
						<option>2:00:00</option>
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
						<option>3:00</option>
						<option>5:00</option>
						<option>10:00</option>
					</select>
				</div>
				<div className='new-workout-jog'>
					<div className='new-jog-sample'>
						<select 
							className='sample-select'
							name='warmup'
							value={this.state.value}
							onChange={this.handleChange}
						>
							<option>Choose Sample</option>
							{this.props.warmupFile.map((file, i) => {
								return <option key={i}>{file.id}</option>
							})}
						</select>
						<button className='preview-button'>Preview</button>
					</div>
					<p>OR</p>
					<div className='new-jog-custom'>
						<select className='sample-select'>
							<option default>Choose Custom</option>
						</select>
						<button className='preview-button'>Preview</button>
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
						<option>1:00</option>
						<option>1:30</option>
						<option>2:00</option>
					</select>
				</div>
				<div className='new-workout-jog'>
					<div className='new-jog-sample'>
						<select 
							className='sample-select'
							name='jog'
							value={this.state.value}
							onChange={this.handleChange}
						>
							<option>Choose Sample</option>
							{this.props.jogFile.map((file, i) => {
								return <option key={i}>{file.id}</option>
							})}
						</select>
						<button className='preview-button'>Preview</button>
					</div>
					<p>OR</p>
					<div className='new-jog-custom'>
						<select className='sample-select'>
							<option default>Choose Custom</option>
						</select>
						<button className='preview-button'>Preview</button>
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
						<option>:30</option>
						<option>:45</option>
						<option>1:00</option>
					</select>
				</div>
				<div className='new-workout-jog'>
					<div className='new-jog-sample'>
						<select 
							className='sample-select'
							name='sprint'
							value={this.state.value}
							onChange={this.handleChange}
						>
							<option>Choose Sample</option>
							{this.props.sprintFile.map((file, i) => {
								return <option key={i}>{file.id}</option>
							})}
						</select>
						<button className='preview-button'>Preview</button>
					</div>
					<p>OR</p>
					<div className='new-jog-custom'>
						<select className='sample-select'>
							<option default>Choose Custom</option>
						</select>
						<button className='preview-button'>Preview</button>
					</div>
				</div>
				<button className='save-workout-button'>Save</button>
			</form>
		)
	}
}

export const mapStateToProps = state => ({
	jogFile: state.JogPace,
	warmupFile: state.WarmupPace,
	sprintFile: state.SprintPace
})

export const mapDispatchToProps = dispatch => ({
	addWorkout: file => dispatch(storeWorkout(file))
})

export default connect(mapStateToProps, mapDispatchToProps)(WorkoutContainer)