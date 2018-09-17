import { JogPace } from '../jogPace'

describe('JogPace', () => {
  it('should return the initial state', () => {
    const expected = []

    const result = JogPace(undefined, {})

    expect(result).toEqual(expected)
  })

  it('should return state with new JogPace', () => {
    const expected = { id: '454545', name: 'space jam' }

    const result = JogPace([], { audioClip: { results: { id: '454545', name: 'space jam' }}, type: 'ADD_JOG_TRACKS' })

    expect(result).toEqual(expected)
  })
})