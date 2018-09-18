import Header from './header'
import { shallow } from 'enzyme'
import React from 'react'

describe('header', () => {
  let wrapper
  let mockLogOut = jest.fn()
  
  beforeEach(() => {
    wrapper = shallow(<Header loggedStatus='true' logOut={mockLogOut}/>)
  })

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot
  })

  it('should call logOut when logout button is clicked', () => {
    wrapper.find('.logout-link').simulate('click')

    expect(mockLogOut).toHaveBeenCalled()
  })
})