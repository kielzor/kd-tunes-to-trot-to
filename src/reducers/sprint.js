export const Sprint = (state = [], action) => {
  switch (action.type) {
    case 'ADD_SPRINT_TRACKS':
      return action.audioClip.results
  default: 
    return state
  }
}