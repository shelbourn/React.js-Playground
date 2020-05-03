import axios from 'axios'

//* Anything set in an axios instance will override the global defaults
//* for the designated properties, but leave the remaining
//* global property defaults intact
//? Axios instances allow you to set which default settings
//? will be used in what part of the app

const instance = axios.create({
	baseURL: 'https://jsonplaceholder.typicode.com',
})

instance.defaults.headers.common['Authorization'] = 'AUTH TOKEN FROM INSTANCE'
instance.defaults.headers.post['Authorization'] = 'application/json'

instance.interceptors.request.use(
	(request) => {
		console.log(request)
		return request
	},

	(error) => {
		console.log(error)
		return Promise.reject(error)
	}
)

instance.interceptors.response.use(
	(response) => {
		console.log(response)
		return response
	},
	(error) => {
		console.log(error)
		return Promise.reject(error)
	}
)

export default instance
