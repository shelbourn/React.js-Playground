import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import './index.css'
import App from './App'
import registerServiceWorker from './registerServiceWorker'
import counterReducer from './store/reducers/counterReducer'
import resultsReducer from './store/reducers/resultsReducer'

//* Creating root reducer (merged reducers)
//* ctr and res have their own partial states so accessing state through them
//* needs to be like state.ctr.counter and state.res.results
const rootReducer = combineReducers({
	ctr: counterReducer,
	res: resultsReducer,
})

//* Creating Redux store and implementing reducer
const reduxStore = createStore(rootReducer)

//* Provider connects Redux to React and the store prop enable the Redux store
ReactDOM.render(
	<Provider store={reduxStore}>
		<App />
	</Provider>,
	document.getElementById('root')
)
registerServiceWorker()
