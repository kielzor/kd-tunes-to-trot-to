export const Workout = (state = [], action) => {
	switch (action.type) {
	case  'CREATE_WORKOUT':
		return [...state, action.workout]
	case 'POPULATE_WORKOUT':
		return action.workout
	default: 
		return state
	}
}