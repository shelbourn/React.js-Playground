//! index.js is the most global file in hierarchy
//! Any global listeners should go here

import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import registerServiceWorker from './registerServiceWorker'
import axios from 'axios'

//* Sets global base URL configuration
//* All POST/GET/PUT/DELETE/PATCH URLs will be appended to this
axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com'

//* More global default settings with Axios
axios.defaults.headers.common['Authorization'] = 'AUTH TOKEN'
axios.defaults.headers.post['Authorization'] = 'application/json'

//* Intercepts all http requests made throughout the app
const requestInterceptor = axios.interceptors.request.use(
	(request) => {
		console.log(request)
		//% Can (and should) edit request (config request) before
		//% returning it
		//! MUST 'return request' FOR OTHER HTTP REQUESTS TO FUNCTION!!!
		return request
	},

	//! Must return Promise.reject(error) because axios has a built-in Promise
	//! and we set the paramater of our component-local .catch() method to be 'error'
	(error) => {
		console.log(error)
		return Promise.reject(error)
	}
)

//* Assigning interceptor to a variable allows you to remove it later
//* as shown above and below
// axios.interceptors.request.eject(requestInterceptor)

//* Intercepts all http responses received throughout the app
axios.interceptors.response.use(
	(response) => {
		console.log(response)
		return response
	},
	(error) => {
		console.log(error)
		return Promise.reject(error)
	}
)

ReactDOM.render(<App />, document.getElementById('root'))
registerServiceWorker()
