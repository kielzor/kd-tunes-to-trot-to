import { WarmupPace } from '../warmupPace'

describe('WarmupPace', () => {
  it('should return the initial state', () => {
    const expected = []

    const result = WarmupPace(undefined, {})

    expect(result).toEqual(expected)
  })

  it('should return state with a new WarmupPace', () => {
    const expected = { id: '232323', name: 'slow jamz' }

    const result = WarmupPace([], { audioClip: { results: { id: '232323', name: 'slow jamz' }}, type: 'ADD_WARMUP_TRACKS' })

    expect(result).toEqual(expected)
  })
})