import React from 'react'
import { WorkoutContainer, mapStateToProps, mapDispatchToProps } from './WorkoutContainer'
import { storeWorkout } from '../../actions/index'
import { shallow } from 'enzyme'

describe('WorkoutContainer', () => {
  let wrapper
  let mockAddWorkout
  let mockSaveWorkout

  beforeEach(() => {
    mockAddWorkout = jest.fn()
    mockSaveWorkout = jest.fn()

    wrapper = shallow (
      <WorkoutContainer 
        warmupFile={[]}
        customFile={[]}
        jogFile={[]}
        sprintFile={[]}
        addWorkout={mockAddWorkout}
        saveWorkout={mockSaveWorkout}
      />)
  })

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('handleChange should set the state with the correct values', () => {
    const mockEvent = { target: { name: 'jogLength', value: '1:00' }}

    wrapper.instance().handleChange(mockEvent)

    expect(wrapper.state('jogLength')).toEqual('1:00')
  })

  it('saveWorkout should save the workout to local storage and the store', () => {
    localStorage.clear()
    const mockEvent = { preventDefault: jest.fn() }
    
    wrapper.instance().saveWorkout(mockEvent)

    expect(localStorage.store).toEqual({"workout": "[{\"name\":\"\",\"totalLength\":0,\"warmupLength\":0,\"warmup\":{},\"jogLength\":0,\"jog\":{},\"sprintLength\":0,\"sprint\":{},\"playing\":\"\"}]"})
  })

  it('should reset the inputs after saving workout', () => {
    const mockEvent = { target: { name: 'jogLength', value: '1:00', }}

    wrapper.instance().handleChange(mockEvent)
    wrapper.instance().resetFields()

    expect(wrapper.state('jogLength')).toEqual(0)
  })

  it('should call saveWorkout and addWorkout on submit', () => {
    const mockEvent = { preventDefault: jest.fn() }
    wrapper.find('.new-workout-container').simulate('submit', mockEvent)

    expect(mockAddWorkout).toHaveBeenCalled()
  })

  it('should map over the props and return state correctly', () => {
    const mockEvent = { target: { name: 'jog', value: { speed: 'Jog', name: 'kiel' } }}    
    wrapper = shallow (
      <WorkoutContainer 
        warmupFile={[{ speed: 'Warmup', name: 'chillin'}]}
        customFile={[{ speed: 'Jog', name: 'kiel' }]}
        jogFile={[{ speed: 'jog', name: 'jogger' }]}
        sprintFile={[{ speed: 'Sprint', name: 'Dave'}]}
        addWorkout={mockAddWorkout}
        saveWorkout={mockSaveWorkout}
      />)

      wrapper.instance().handleChange(mockEvent)

      expect(wrapper.state('jog')).toEqual({"name": "kiel", "speed": "Jog"})
  })

  it('should call playPreview on click and set the state correctly', () => {
    const expected = "https://freesound.org/apiv2/sounds/[object Object]/download/"

    wrapper.find('.sprint-preview').simulate('click', { preventDefault: jest.fn() })

    expect(wrapper.state('playing')).toEqual(expected)
  })

  it('should call playPreview on click and set the state correctly', () => {
    const expected = "https://freesound.org/apiv2/sounds/[object Object]/download/"
    
    wrapper.find('.jog-preview').simulate('click', { preventDefault: jest.fn() })

    expect(wrapper.state('playing')).toEqual(expected)
  })

  it('should call playPreview on click and set the state correctly', () => {
    const expected = "https://freesound.org/apiv2/sounds/[object Object]/download/"
    
    wrapper.find('.warmup-preview').simulate('click', { preventDefault: jest.fn() })

    expect(wrapper.state('playing')).toEqual(expected)
  })

  describe('mapStateToProps', () => {
    it('should return a jogFile array with objects in it', () => {
      const mockState = {
        JogPace: [{ id: '344322' }],
        WarmupPace: [{ id: '674747' }],
        SprintPace: [{ id: '998444' }],
        CustomAudio: [{ url: 'custom-audio'}]
      }

      const expected = {
        jogFile: [{ id: '344322' }],
        warmupFile: [{ id: '674747' }],
        sprintFile: [{ id: '998444' }],
        customFile: [{ url: 'custom-audio' }]
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