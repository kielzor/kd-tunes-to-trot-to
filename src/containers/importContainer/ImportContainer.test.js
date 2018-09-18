import React from 'react'
import { ImportContainer, mapDispatchToProps } from './ImportContainer'
import { addUserFile } from '../../actions/index'
import { shallow } from 'enzyme'

describe('ImportContainer', () => {
  let wrapper
  let mockAddUserAudioFile = jest.fn()

  beforeEach(() => {
    wrapper = shallow(<ImportContainer addUserAudioFile={mockAddUserAudioFile}/>)
  })

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('handleChange should set the state with the correct values', () => {
    const mockEvent = { target: { name: 'jogLength', value: '1:00' }}

    wrapper.instance().handleChange(mockEvent)

    expect(wrapper.state('jogLength')).toEqual('1:00')
  })

  it('addUserAudioFile should call be called on submit', () => {
    const mockEvent = { preventDefault: jest.fn() }
    
    wrapper.find('.import-audio').simulate('submit', mockEvent)

    expect(mockAddUserAudioFile).toHaveBeenCalled()

  })

  describe('mapDispatchToProps', () => {
    it('calls dispatch with addUserFile when addUserAudioFile is called', () => {
      const mockDispatch = jest.fn()
      const actionToDispatch = addUserFile({ name: 'test', speed: 'jog' })

      const mappedProps = mapDispatchToProps(mockDispatch)
      mappedProps.addUserAudioFile({ name: 'test', speed: 'jog' })

      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)
    })
  })
})