import React, { Component } from 'react'
import ReactPlayer from 'react-player'
import { connect } from 'react-redux'

export class MusicPlayer extends Component{
  constructor() {
    super()
    this.state = {
      id: '',
      warmupLength: 0,
      jogLength: 0,
      sprintLength: 0,
      totalLength: 0
    }
  }

  handleChange = e => {
    const { value } = e.target    
    const workoutToPlay = this.props.workout.filter(workout => {
      return workout.name === value
    })
    
    const workout = workoutToPlay[0]

    const jogLength = this.convertLength(workout.jogLength)
    const warmupLength= this.convertLength(workout.warmupLength)
    const sprintLength = this.convertLength(workout.sprintLength)
    const totalLength = this.convertLength(workout.totalLength)

    this.setState ({
      totalLength,
      warmupLength,
      jogLength,
      sprintLength
    })

    this.playWorkout(workout.jog)
  }

  convertLength = time => {
    let length

    if (time === ':30') length = 30000
    if (time === ':45') length = 45000
    if (time === '1:00') length = 60000
    if (time === '1:30') length = 90000
    if (time === '2:00') length = 120000
    if (time === '3:00') length = 180000
    if (time === '5:00') length = 300000
    if (time === '10:00') length = 600000
    if (time === '1:00:00') length = 3600000
    if (time === '1:30:00') length = 5400000
    if (time === '2:00:00') length = 7200000

    return length
  }

  playWorkout = playlist => {
    this.setState ({
      id: `https://freesound.org/apiv2/sounds/${playlist}/download/`
    })
  }

  render() {
    return (
      <div>
        <select
          onChange={this.handleChange}
          value={this.state.value}
        >
          <option selected='selected'>Choose Workout</option>
          {this.props.workout.map(file => {
            return <option>{file.name}</option>
          })}
        </select>
        <ReactPlayer url={this.state.id} playing controls/>
      </div>
    )
  }
}

export const mapStateToProps = state => ({
  workout: state.Workout
})

export default connect(mapStateToProps)(MusicPlayer)