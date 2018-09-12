import { WorkoutContainer, mapStateToProps, mapDispatchToProps } from './WorkoutContainer'
import { storeWorkout } from '../../actions/index'

describe('WorkoutContainer', () => {
  describe('mapStateToProps', () => {
    it('should return a jogFile array with objects in it', () => {
      const mockState = {
        JogPace: [{ id: '344322' }],
        WarmupPace: [{ id: '674747' }],
        SprintPace: [{ id: '998444' }]
      }

      const expected = {
        jogFile: [{ id: '344322' }],
        warmupFile: [{ id: '674747' }],
        sprintFile: [{ id: '998444' }]
      }

      const mappedProps = mapStateToProps(mockState)

      expect(mappedProps).toEqual(expected)
    })
  })

  describe('mapDispatchToProps', () => {
    it('calls dispatch with storeWorkout actions when addWorkout is called', () => {
      const mockDispatch = jest.fn()
      const actionToDispatch = storeWorkout({ name: 'kiel', jogLength: '1:00' })

      const mappedProps = mapDispatchToProps(mockDispatch)
      mappedProps.addWorkout({ name: 'kiel', jogLength: '1:00' })

      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)
    })
  })
})