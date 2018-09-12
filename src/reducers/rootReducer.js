import { combineReducers } from 'redux';
import { CustomAudioReducer } from './customAudioReducer'
import { AddJogReducer } from './addJogReducer'
import { AddWarmupReducer } from './addWarmupReducer'
import { Sprint } from './sprint'
import { Workout } from './workout'

export const rootReducer = combineReducers({
  CustomAudio: CustomAudioReducer,
  jogPace: AddJogReducer,
  warmupPace: AddWarmupReducer,
  Sprint,
  Workout
})
