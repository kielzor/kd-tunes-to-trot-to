import React, { Component } from 'react'
import './App.css';
import { clientId } from '../../keys'
import Header from '../header/header'
import DesktopDisplayContainer from '../desktopDisplayContainer/DesktopDisplayContainer.js'
import { Route, withRouter, Link } from 'react-router-dom';
import ImportContainer from '../importContainer/ImportContainer'
import { NewSongContainer } from '../newSongContainer/NewSongContainer'
import WorkoutContainer from '../workoutContainer/WorkoutContainer'
import { AudioPlayer } from '../musicPlayer/MusicPlayer'
import { fetchUser, getComments } from '../../helpers/Fetch'
// import { connect } from 'react-redux'

class App extends Component {
  constructor() {
    super()
    this.state = {
      desktopClicked: false,
      code: '',
      token: ''
    }
  }
  
  componentDidMount = () => {
    let data = window.location.search
    this.setState({
      code: data.split('').splice(6,data.length).join('')})
  }

  handleDesktopClick = (type) => {
    if (type === 'back') this.setState({ desktopClicked: false})
    else this.setState ({ desktopClicked: true })
  }

  logOut = () => {
    this.setState({
      code: '',
      token: ''
    })
    this.handleDesktopClick('back')
  }

  handleSubmit = async () => {
    const token = await fetchUser(this.state.code)
    await this.setState({ token })
    const audio = await getComments(token)
    await console.log(audio)
  }

  render() {
    return (
      <div className="App">
        <Header 
          desktopClicked={this.state.desktopClicked}
          handleDesktopClick={this.handleDesktopClick}
          logOut={this.logOut}
          loggedStatus={this.state.code}/>
        <Route exact path='/desktop-controller' render = {() => {
          return <DesktopDisplayContainer 
            handleDesktopClick={this.handleDesktopClick}
            getComments={this.getComments}/>
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
          return <AudioPlayer />
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

export default withRouter((App));