import { SprintPace } from '../sprintPace'

describe('sprintPace', () => {
  it('should return the initial state', () => {
    const expected = []

    const result = SprintPace(undefined, {})

    expect(result).toEqual(expected)
  })

  it('should return state with the sprint tracks added', () => {
    const expected = { id: '343434', name: 'fast n groovy' }

    const result = SprintPace([], { audioClip: { results: { id: '343434', name: 'fast n groovy' }}, type: 'ADD_SPRINT_TRACKS' })

    expect(result).toEqual(expected)
  })
})