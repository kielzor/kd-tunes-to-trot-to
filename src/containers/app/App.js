import React, { Component } from 'react'
import './App.css';
import { clientId } from '../../keys'
import Header from '../../components/header/header'
import DesktopDisplayContainer from '../../components/desktopDisplayContainer/DesktopDisplayContainer.js'
import { Route, withRouter, Link } from 'react-router-dom';
import ImportContainer from '../importContainer/ImportContainer'
import { NewSongContainer } from '../../components/newSongContainer/NewSongContainer'
import WorkoutContainer from '../workoutContainer/WorkoutContainer'
import MusicPlayer from '../../containers/musicPlayer/MusicPlayer'
import { fetchUser, fetchAudio } from '../../helpers/Fetch'
import { connect } from 'react-redux'
import { storeJog, storeWarmup, storeSprint, populateWorkout } from '../../actions/index'

export class App extends Component {
  constructor() {
    super()
    this.state = {
      code: ''
    }
  }
  
  componentDidMount = () => {
    let data = window.location.search
    this.setState({
      code: data.split('').splice(6,data.length).join('')})
  }

  logOut = () => {
    this.setState({
      code: ''
    })
  }

  handleSubmit = async () => {
    const token = await fetchUser(this.state.code)
    const jogAudio = await fetchAudio(token, '14826')
    await this.props.addJog(jogAudio)
    const warmupAudio = await fetchAudio(token, '11118')
    await this.props.addWarmup(warmupAudio)
    const sprintAudio = await fetchAudio(token, '14826')
    await this.props.addSprint(sprintAudio)
    if (localStorage.length) {
      const item = JSON.parse(localStorage.getItem('workout'))
      this.props.populateWorkout(item)
    }
  }

  render() {
    return (
      <div className="App">
        <Header 
          desktopClicked={this.state.desktopClicked}
          logOut={this.logOut}
          loggedStatus={this.state.code}/>
        <Route exact path='/desktop-controller' render = {() => {
          return <DesktopDisplayContainer 
            handleDesktopClick={this.handleDesktopClick}/>
        }} />
        <Route exact path='/import' render={() => {
          return <ImportContainer />
        }} />
        <Route exact path='/new-song' render={() => {
          return <NewSongContainer />
        }} />
        <Route exact path='/workout' render={() => {
          return <WorkoutContainer />
        }} />
        <Route exact path='/music-player' render={() => {
          return <MusicPlayer />
        }} />
        <Route exact path='/' render={() => {
          return (
        <div>
          {!this.state.code && 
          <a href={`https://freesound.org/apiv2/oauth2/authorize/?client_id=${clientId}&response_type=code`}>Login with freesound</a>}
          {this.state.code && 
          <Link to='/desktop-controller'>
            <button 
              className='get-started-button'
              onClick={this.handleSubmit}>Get Started!</button>
          </Link>}
        </div>
        )}} />
      </div>
    );
  }
}

export const mapDispatchToProps = dispatch => ({
  addJog: audioClip => dispatch(storeJog(audioClip)),
  addWarmup: audioClip => dispatch(storeWarmup(audioClip)),
  addSprint: audioClip => dispatch(storeSprint(audioClip)),
	populateWorkout: file => dispatch(populateWorkout(file))
})

export default withRouter(connect(null, mapDispatchToProps)(App));