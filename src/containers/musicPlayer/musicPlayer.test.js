import React from 'react'
import { shallow } from 'enzyme'
import { MusicPlayer, mapStateToProps } from './MusicPlayer'

describe('MusicPlayer', () => {
	let wrapper

	beforeEach (() => {
		wrapper = shallow(<MusicPlayer workout={[]}/>)
	})
	it('should match the snapshot', () => {
		expect(wrapper).toMatchSnapshot()
	})

	it('should set the state with converted lengths when handleChange is called', () => {
		wrapper = shallow(<MusicPlayer workout={[{ sprintLength: '1:00' }]}/>)
    
		const mockEvent = { target: { sprintLength: { speed: 'Jog', name: 'kiel' } }}    

		wrapper.instance().handleChange(mockEvent)

		expect(wrapper.state('sprintLength')).toEqual(60000)
	})

	it('playJog should set the state correctly', () => {
		wrapper.instance().playJog()

		expect(wrapper.state('currentWorkout')).toEqual('Jog')
	})

	it('playJog should keep the state as Cooldown', () => {
		wrapper.setState({currentWorkout: 'Cooldown'})

		wrapper.instance().playJog()

		expect(wrapper.state('currentWorkout')).toEqual('Cooldown')
	})

	it('playWarmup should set the state correctly', () => {
		wrapper.instance().playWarmup()

		expect(wrapper.state('currentWorkout')).toEqual('Warmup')
	})

	it('playSprint should set the state correctly', () => {
		wrapper.instance().playSprint()

		expect(wrapper.state('currentWorkout')).toEqual('Sprint')
	})

	it('playSprint should keep the state as Cooldown', () => {
		wrapper.setState({currentWorkout: 'Cooldown'})

		wrapper.instance().playSprint()

		expect(wrapper.state('currentWorkout')).toEqual('Cooldown')
	})

	it('playCooldown should set the state to Cooldown', () => {
		wrapper.instance().playCooldown()

		expect(wrapper.state('currentWorkout')).toEqual('Cooldown')
	})

	describe('mapStateToProps', () => {
		it('should return a jogFile array with objects in it', () => {
			const mockState = {
				Workout: [{ name: 'test' }],
			}

			const expected = {
				workout: [{ name: 'test' }],
			}

			const mappedProps = mapStateToProps(mockState)

			expect(mappedProps).toEqual(expected)
		})
	})
})