export const CustomAudio = (state = [], action) => {
  switch (action.type) {
    case 'ADD_NEW_FILE':
      return [...state, action.audioClip];
    default:
      return state;
  }
};