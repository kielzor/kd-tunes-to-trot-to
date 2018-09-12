import React, { Component } from 'react'
import './ImportContainer.css'
import { connect } from 'react-redux'
import { addUserFile } from '../../actions/index'

class ImportContainer extends Component {
	constructor() {
		super()
		this.state = {
			name: '',
			speed: '',
			file: {}
		}
	}

	handleChange = (e) => {
		const { name, value } = e.target

		this.setState ({
			[name]: value
		})
	}

	handleSubmit = (e) => {
		e.preventDefault()
		console.log(this.state)
		this.props.addUserAudioFile(this.state)
	}

	render () {
		return (
			<div className='import-container'>
				<h1>Import Audio</h1>
				<form className='import-audio' onSubmit={this.handleSubmit}>
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
		)
	}
}

const mapDispatchToProps = dispatch => ({
	addUserAudioFile: file => dispatch(addUserFile(file))
})

export default connect(null, mapDispatchToProps)(ImportContainer)