export const addUserFile = audioClip => {
  return {
    type: 'ADD_NEW_FILE',
    audioClip
  };
};

export const storeJog = audioClip => {
  return {
    type: 'ADD_JOG_TRACKS',
    audioClip
  };
};

export const storeWarmup = audioClip => {
  return {
    type: 'ADD_WARMUP_TRACKS',
    audioClip
  };
};

export const storeSprint = audioClip => {
  return {
    type: 'ADD_SPRINT_TRACKS',
    audioClip
  };
};

export const storeWorkout = workout => {
  return {
    type: 'CREATE_WORKOUT',
    workout
  };
};

export const populateWorkout = workout => {
  return {
    type: 'POPULATE_WORKOUT',
    workout
  };
};