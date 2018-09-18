export const JogPace = (state = [], action) => {
  switch (action.type) {
    case 'ADD_JOG_TRACKS':
      return action.audioClip.results;
    default:
      return state;
  }
};