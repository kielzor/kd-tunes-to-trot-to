import React from 'react'
import { App } from './App'
import { shallow } from 'enzyme'
import { Provider } from 'react-redux'

describe('App', () => {
  let wrapper

  beforeEach(() => {
    wrapper = 
      shallow (<App />)})

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
})