import { combineReducers } from 'redux';
import { CustomAudio } from './customAudio'
import { JogPace } from './jogPace'
import { WarmupPace } from './warmupPace'
import { SprintPace } from './sprintPace'
import { Workout } from './workout'

export const rootReducer = combineReducers({
  CustomAudio: CustomAudio,
  JogPace,
  WarmupPace,
  SprintPace,
  Workout
})
