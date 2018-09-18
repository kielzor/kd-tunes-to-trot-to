import React from 'react'
import { App, mapDispatchToProps } from './App'
import { shallow } from 'enzyme'
import { storeJog, storeWarmup, storeSprint, populateWorkout } from '../../actions/index'

describe('App', () => {
  let wrapper
  let mockAddJog = jest.fn()
  let mockAddWarmup = jest.fn()
  let mockAddSprint = jest.fn()
  let mockPopulateWorkout = jest.fn()

  beforeEach(() => {
    wrapper = shallow (
    <App 
      addJog={mockAddJog}
      addWarmup={mockAddWarmup}
      addSprint={mockAddSprint}
      populateWorkout={mockPopulateWorkout}
    />)})

    window.fetch = jest.fn().mockImplementation(() => 
    Promise.resolve({
      ok: true, 
      json: () => Promise.resolve({ results: '09909' })
    }));

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
  
  describe('logOut', () => {
    it('should reset the state', () => {
      const mockState = { code: 'hello' }
     
      wrapper.setState (mockState)
      wrapper.instance().logOut()

      expect(wrapper.state('code')).toEqual('')
    })
  })

  describe('handleSubmit', () => {
    it('should call mockJog when handleSubmit is called', async () => {
      await wrapper.instance().handleSubmit(10010)

      expect(mockAddJog).toHaveBeenCalled()
    })

    it('should call mockWarmup when handleSubmit is called', async () => {
      await wrapper.instance().handleSubmit(10010)

      expect(mockAddWarmup).toHaveBeenCalled()
    })

    it('should call mockSprint when handleSubmit is called', async () => {
      await wrapper.instance().handleSubmit(10010)

      expect(mockAddSprint).toHaveBeenCalled()
    })
  })

  describe('mapDispatchToProps', () => {
    it('calls dispatch with storeJog actions when addJog is called', () => {
      const mockDispatch = jest.fn()
      const actionToDispatch = storeJog({ name: 'jog', jogLength: '1:00' })

      const mappedProps = mapDispatchToProps(mockDispatch)
      mappedProps.addJog({ name: 'jog', jogLength: '1:00' })

      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)
    })

    it('calls dispatch with storeWarmup actions when addWarmup is called', () => {
      const mockDispatch = jest.fn()
      const actionToDispatch = storeWarmup({ name: 'warmup', warmupLength: '5:00' })

      const mappedProps = mapDispatchToProps(mockDispatch)
      mappedProps.addWarmup({ name: 'warmup', warmupLength: '5:00' })

      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)
    })

    it('calls dispatch with storeSprint actions when addSprint is called', () => {
      const mockDispatch = jest.fn()
      const actionToDispatch = storeSprint({ name: 'sprint', sprintLength: '1:00' })

      const mappedProps = mapDispatchToProps(mockDispatch)
      mappedProps.addSprint({ name: 'sprint', sprintLength: '1:00' })

      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)
    })

    it('calls dispatch with populateWorkout actions when populateWorkout is called', () => {
      const mockDispatch = jest.fn()
      const actionToDispatch = populateWorkout({ name: 'populate', workout: { name: 'kiel' }})

      const mappedProps = mapDispatchToProps(mockDispatch)
      mappedProps.populateWorkout({ name: 'populate', workout: { name: 'kiel' }})

      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)
    })
  })
})