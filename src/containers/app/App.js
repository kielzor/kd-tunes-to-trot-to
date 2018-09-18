import React, { Component } from 'react';
import { Route, withRouter, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { clientId } from '../../keys';
import { storeJog, storeWarmup, storeSprint, populateWorkout } from '../../actions/index';
import { fetchUser, fetchAudio } from '../../helpers/Fetch';
import MusicPlayer from '../../containers/musicPlayer/MusicPlayer';
import WorkoutContainer from '../workoutContainer/WorkoutContainer';
import ImportContainer from '../importContainer/ImportContainer';
import DesktopDisplayContainer from '../../components/desktopDisplayContainer/DesktopDisplayContainer.js';
import Header from '../../components/header/header';
import './App.css';

export class App extends Component {
  constructor() {
    super();
    this.state = {
      code: ''
    };
  }
  
  componentDidMount = () => {
    let data = window.location.search;

    this.setState({
      code: data.split('').splice(6, data.length).join("")});
  }

  logOut = () => {
    this.setState({
      code: ''
    });
  }

  handleSubmit = async () => {
    const token = await fetchUser(this.state.code);
    const jogAudio = await fetchAudio(token, '14826');
    await this.props.addJog(jogAudio);
    const warmupAudio = await fetchAudio(token, '11118');
    await this.props.addWarmup(warmupAudio);
    const sprintAudio = await fetchAudio(token, '14826');
    await this.props.addSprint(sprintAudio);

    if (localStorage.length) {
      const item = JSON.parse(localStorage.getItem('workout'));
      this.props.populateWorkout(item);
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
            handleDesktopClick={this.handleDesktopClick}/>;
        }} />
        <Route exact path='/import' component={ImportContainer} />
        <Route exact path='/workout' render={() => {
          return <WorkoutContainer />;
        }} />
        <Route exact path='/music-player' render={() => {
          return <MusicPlayer />;
        }} />
        <Route exact path='/' render={() => {
          return (
            <div>
              {!this.state.code && 
                <a className='a-tag' href={`https://freesound.org/apiv2/oauth2/authorize/?client_id=${clientId}&response_type=code`}>Login with freesound</a>}
              {this.state.code && 
              <NavLink 
                to='/desktop-controller'
                className='get-started'
                onClick={this.handleSubmit}
              >
                <button className='get-started-button'>Get Started!</button>
              </NavLink>}
            </div>
          ); 
        }} />
      </div>
    );
  }
}

App.propTypes = {
  addJog: PropTypes.func,
  addWarmup: PropTypes.func,
  addSprint: PropTypes.func,
  populateWorkout: PropTypes.func
};

export const mapDispatchToProps = dispatch => ({
  addJog: audioClip => dispatch(storeJog(audioClip)),
  addWarmup: audioClip => dispatch(storeWarmup(audioClip)),
  addSprint: audioClip => dispatch(storeSprint(audioClip)),
  populateWorkout: file => dispatch(populateWorkout(file))
});

export default withRouter(connect(null, mapDispatchToProps)(App));