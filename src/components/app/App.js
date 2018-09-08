import React, { Component } from 'react';
import './App.css';
import { clientId, secretId } from '../../keys'
import Header from '../header/header'
import DesktopDisplayContainer from '../desktopDisplayContainer/DesktopDisplayContainer.js'
import { Route, withRouter, Link } from 'react-router-dom';
import { ImportContainer } from '../importContainer/ImportContainer'
import { NewSongContainer } from '../newSongContainer/NewSongContainer'
import { WorkoutContainer } from '../workoutContainer/WorkoutContainer'
// import { connect } from 'react-redux'


class App extends Component {
  constructor() {
    super()
    this.state = {
      desktopClicked: false,
      code: ''
    }
  }
  
  componentDidMount() {
    this.setState({code: window.location.search.split('').splice(6,window.location.search.length).join('')})
  }

  handleDesktopClick = (type) => {
    if (type === 'back') this.setState({ desktopClicked: false})
    else this.setState ({ desktopClicked: true })
  }

  logOut = () => {
    this.setState({
      code: ''
    })
    this.handleDesktopClick('back')
  }

  handleSubmit = async () => {
    try {
      const response = await fetch(`https://freesound.org/apiv2/oauth2/access_token?client_id=${clientId}&client_secret=${secretId}&grant_type=authorization_code&code=${this.state.code}`,
        { method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded', 
            'accept': 'application/json',
          }
        })
      const data = await response.json()
      await this.setState({token: data.access_token})
      await this.getComments()
    } catch (error) {
      console.log('error', error.message)
    }
  }

  getComments = async () => {
    const response = await fetch('https://freesound.org/apiv2/search/combined/?target=rhythm.bpm:120&filter=tag:loop', {
      headers: {
        "Authorization": `Bearer ${this.state.token}`
      }
    })
    const data = await response.json()
    console.log(data)
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
        <Route exact path='/' render={() => {
          return (
          <div>
            {!this.state.code.length && 
            <a href={`https://freesound.org/apiv2/oauth2/authorize/?client_id=${clientId}&response_type=code`}>Login with freesound</a>}
            {this.state.code.length && 
            <Link to='/desktop-controller'>
               <button onClick={this.handleSubmit}>Get Started!</button>
            </Link>}
          </div>
          )}} />
      </div>
    );
  }
}

export default withRouter((App));