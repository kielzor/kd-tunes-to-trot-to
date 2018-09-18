import { CustomAudio } from '../customAudio'

describe('CustomAudio', () => {
	it('should return the initial state', () => {
		const expected = []

		const result = CustomAudio(undefined, {})

		expect(result).toEqual(expected)
	})

	it('should return state with a new custom audio array', () => {
		const expected = [{ name: 'kiel', speed: 'jog', file: 'http://fakeurl/' }]

		const result = CustomAudio([], {audioClip: { name: 'kiel', speed: 'jog', file: 'http://fakeurl/' }, type: 'ADD_NEW_FILE'})

		expect(result).toEqual(expected)
	})
})