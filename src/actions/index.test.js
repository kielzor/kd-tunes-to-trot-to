import * as actions from './index'

describe('actions', () => {
	it('should have a type of addUserFile', () => {
		const audioClip = 'http://audio-clip/'
		const expectedAction = {
			type: 'ADD_NEW_FILE',
			audioClip
		}

		const result = actions.addUserFile(audioClip)

		expect(result).toEqual(expectedAction)
	})

	it('should have a type of storeJog', () => {
		const audioClip = 'http://audio-clip/'
		const expectedAction = {
			type: 'ADD_JOG_TRACKS',
			audioClip
		}

		const result = actions.storeJog(audioClip)

		expect(result).toEqual(expectedAction)
	})

	it('should have a type of storeWarmup', () => {
		const audioClip = 'http://audio-clip/'
		const expectedAction = {
			type: 'ADD_WARMUP_TRACKS',
			audioClip
		}

		const result = actions.storeWarmup(audioClip)

		expect(result).toEqual(expectedAction)
	})

	it('should have a type of storeSprint', () => {
		const audioClip = 'http://audio-clip/'
		const expectedAction = {
			type: 'ADD_SPRINT_TRACKS',
			audioClip
		}

		const result = actions.storeSprint(audioClip)

		expect(result).toEqual(expectedAction)
	})

	it('should have a type of storeWorkout', () => {
		const workout = { name: 'workout-one', length: '1:00:00' }
		const expectedAction = {
			type: 'CREATE_WORKOUT',
			workout
		}

		const result = actions.storeWorkout(workout)

		expect(result).toEqual(expectedAction)
	})

	it('should have a type of populateWorkout', () => {
		const workout = { name: 'workout-one', length: '1:00:00' }
		const expectedAction = {
			type: 'POPULATE_WORKOUT',
			workout
		}

		const result = actions.populateWorkout(workout)

		expect(result).toEqual(expectedAction)
	})
})