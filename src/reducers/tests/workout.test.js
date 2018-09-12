import { Workout } from '../workout'

describe('workout', () => {
  it('should return the initial state', () => {
    const expected = []

    const result = Workout(undefined, {})

    expect(result).toEqual(expected)
  })

  it('should return state with a new workout', () => {
    const expected = [{ name: 'kiel', jogLenth: '1:00'}]

    const result = Workout([], {workout: { name: 'kiel', jogLenth: '1:00' }, type: 'CREATE_WORKOUT'})

    expect(result).toEqual(expected)
  })

  it('should return state with populated workouts', () => {
    const expected = { name: 'kiel', jogLenth: '1:00' }

    const result = Workout([], { workout: { name: 'kiel', jogLenth: '1:00' }, type: 'POPULATE_WORKOUT'  })

    expect(result).toEqual(expected)
  })
})