import React from 'react'
import { clientId, secretId } from '../keys'

export const fetchUser = async (code) => {
	try {
		const response = await fetch(`https://freesound.org/apiv2/oauth2/access_token?client_id=${clientId}&client_secret=${secretId}&grant_type=authorization_code&code=${code}`,
			{ method: 'POST',
				headers: {
					'Content-Type': 'application/x-www-form-urlencoded', 
					'accept': 'application/json',
				}
			})
		const data = await response.json()
		return await data.access_token
	} catch (error) {
		console.log('error', error.message)
	}
}


export const getComments = async (token) => {
	const response = await fetch('https://freesound.org/apiv2/sounds/1234/', {
		headers: {
			'Authorization': `Bearer ${token}`
		}
	})
	const data = await response.json()
	return data
}