//* Node.js syntax for including dependency
const redux = require('redux')
const createStore = redux.createStore

const initialState = {
	counter: 0,
}

//? Redux Reducer (can have many reducers, but they will all eventually be
//? merged into one main reducer)
//% (state = initialState, ...) is setting the state to a default value
//% when the state is undefined
const rootReducer = (state = initialState, action) => {
	return state
}

//? Redux Store
const store = createStore(rootReducer)
console.log(store.getState())

//? Redux Dispatching Action

//? Redux Subscription
