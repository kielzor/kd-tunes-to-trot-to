import fetchUser  from './Fetch'
import { shallow } from 'enzyme'

describe('fetchUser', () => {
  let wrapper

  beforeEach(() => {
    // wrapper = shallow(<fetchUser />)
  })

  it('should match the snapshot', () => {
    expect(wrapper).toMatch(snapshot)
  })
})