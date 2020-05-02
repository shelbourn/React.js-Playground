//! index.js is the most global file in hierarchy
//! Any global listeners should go here

import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import registerServiceWorker from './registerServiceWorker'
import axios from 'axios'

//* Intercepts all http requests made throughout the app
axios.interceptors.request.use(
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
