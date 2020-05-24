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
	switch (action.type) {
		case 'INC_COUNTER':
			return {
				...state,
				counter: state.counter + 1,
			}
			break
		case 'ADD_COUNTER':
			return {
				...state,
				counter: state.counter + action.countValue,
			}
			break
	}
	//% state is returned if none of the switch statements are satisfied
	return state
}

//? Redux Store
const store = createStore(rootReducer)
console.log(store.getState())

//? Redux Dispatching Action
//% the .dispatch function takes a JS object as an arg which MUST include a
//% 'type' key. The value can be any name, but the convention is
//% an all UPPERCASE string
//* Dispatch sends actions to the reducer for state updates
//* In this case, 'INC_COUNTER' and 'ADD_COUNTER' will be sent to the reducer
store.dispatch({ type: 'INC_COUNTER' })
store.dispatch({ type: 'ADD_COUNTER', countValue: 10 })
console.log(store.getState())

//? Redux Subscription
//* Subscriptions inform the component that the state has been updated
//* and re-rendering may be necessary
//% This bypasses having to manually call .getState() to retrieve the current state
