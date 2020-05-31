import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
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

/***
 * ? Middleware is a function that is executed after an action is dispatched
 * ? and before the store is updated with the new state without interrupting the
 * ? process. Middleware is good for logging state changes, injecting methods, and
 * ? handling async code.
 */

//* Creating middleware
const logger = (store) => {
	return (next) => {
		return (action) => {
			console.log('[Middleware] Dispatching', action)
			const result = next(action)
			console.log('[Middleware] next state', store.getState())
			return result
		}
	}
}

//* Adding gloabl variable to enable Redux DEVTOOLS
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

//* Creating Redux store, implementing reducer, and applying middleware
const reduxStore = createStore(
	rootReducer,
	composeEnhancers(applyMiddleware(logger))
)

//* Provider connects Redux to React and the store prop enable the Redux store
ReactDOM.render(
	<Provider store={reduxStore}>
		<App />
	</Provider>,
	document.getElementById('root')
)
registerServiceWorker()
