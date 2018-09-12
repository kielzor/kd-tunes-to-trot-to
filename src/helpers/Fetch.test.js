import { fetchUser } from './Fetch'

describe('fetchUser', () => {
  let mockEvent
  let mockData
  let mockResponse

  beforeEach(() => {
    mockEvent = { preventDefault: jest.fn() }
    mockResponse = { token: '12398948349' }    
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      status: 200,
      json: () => Promise.resolve ({ mockResponse })
    })
    )
  })

  it('calls fetch with the right url when getting a token code', () => {
    const expectedBody = {"headers": {"Content-Type": "application/x-www-form-urlencoded", "accept": "application/json"}, "method": "POST"}
    
    fetchUser()

    expect(window.fetch).toHaveBeenCalledWith("https://freesound.org/apiv2/oauth2/access_token?client_id=J2B30ErhjcsZIM53KgMu&client_secret=pGcesKXEVXgMoImE2oaTxbbAL2kZppVTRf5DIBTE&grant_type=authorization_code&code=undefined", expectedBody)
  })

  // it('returns a code if the status is okay', async () => {
  //   const mockCode = '12398948349'

  //   await expect(fetchUser(mockCode)).resolves.toEqual('')
  // })
  
  // it('throws an error if the fetch call fails', async () => {
  //   window.fetch = await jest.fn().mockImplementation(() => Promise.reject(
  //     new Error('failed')
  //   ))

  //   await fetchUser()

  //   expect(window.fetch).toEqual('')
  // })

})
