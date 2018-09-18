import DesktopDisplayContainer from './DesktopDisplayContainer'
import React from 'react'
import { shallow } from 'enzyme'

describe('DesktopDisplayContainer', () => {
  let wrapper
  let mockHandleDesktopClick = jest.fn()

  beforeEach(() => {
    wrapper = shallow(<DesktopDisplayContainer handleDesktopClick={mockHandleDesktopClick} />)
  })

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('should call mock function on workout click', () => {
    wrapper.find('.desktop-link-workout').simulate('click')

    expect(mockHandleDesktopClick).toHaveBeenCalled()
  })

  it('should call mock function on player click', () => {
    wrapper.find('.desktop-link-player').simulate('click')

    expect(mockHandleDesktopClick).toHaveBeenCalled()
  })

  it('should call mock function on import click', () => {
    wrapper.find('.desktop-link-import').simulate('click')

    expect(mockHandleDesktopClick).toHaveBeenCalled()
  })
})