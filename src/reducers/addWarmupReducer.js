export const AddWarmupReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_WARMUP_TRACKS':
      return action.audioClip.results
  default:
    return state
  }
}