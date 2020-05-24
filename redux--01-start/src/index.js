import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import './index.css'
import App from './App'
import registerServiceWorker from './registerServiceWorker'
import reduxReducer from '../store/reducer'

//* Creating Redux store and implementing reducer
const reduxStore = createStore(reduxReducer)

ReactDOM.render(
	//* Provider connects Redux to React and the store prop enable the Redux store
	<Provider store={reduxStore}>
		<App />
	</Provider>,
	document.getElementById('root')
)
registerServiceWorker()
