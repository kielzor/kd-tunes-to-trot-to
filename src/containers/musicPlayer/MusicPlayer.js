import React, { Component } from 'react'
import ReactPlayer from 'react-player'
import { connect } from 'react-redux'
import './MusicPlayer.css'

export class MusicPlayer extends Component{
  constructor() {
    super()
    this.state = {
      id: '',
      warmupLength: 0,
      jogLength: 0,
      sprintLength: 0,
      totalLength: 0,
      currentWorkout: 'Choose your workout!!'
    }
  }

  handleChange = e => {
    const { value } = e.target
    
    if ( value === 'Choose Workout') return

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
      sprintLength,
      jog: workout.jog,
      warmup: workout.warmup,
      sprint: workout.sprint
    })

    this.playWarmup(workout)
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

  playWarmup = () => {
    this.setState ({
      id: `https://freesound.org/apiv2/sounds/${this.state.warmup}/download/`,
      currentWorkout: 'Warmup'
    })
    setTimeout(this.playJog, 20000)
  }

  playJog = () => {
    this.setState ({
      id: `https://freesound.org/apiv2/sounds/${this.state.jog}/download/`,
      currentWorkout: 'Jog'
    })
    setTimeout(this.playSprint, 20000)
  }

  playSprint = () => {
    this.setState ({
      id: `https://freesound.org/apiv2/sounds/${this.state.sprint}/download/`,
      currentWorkout: 'Sprint'
    })
    setTimeout(this.playJog, 20000)
  }

  render() {
    return (
      <div className='player-parent'>
      <h1>
        {this.state.currentWorkout}
      </h1>
        <ReactPlayer 
          className='player'
          url={this.state.id} 
          playing 
          controls
        />
        <select
          className='workout-selector'
          onChange={this.handleChange}
          value={this.state.value}
        >
          <option selected='selected'>Choose Workout</option>
          {this.props.workout.map(file => {
            return <option>{file.name}</option>
          })}
        </select>
      </div>
    )
  }
}

export const mapStateToProps = state => ({
  workout: state.Workout
})

export default connect(mapStateToProps)(MusicPlayer)