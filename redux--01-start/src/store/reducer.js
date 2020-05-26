const initialState = {
	counter: 0,
	results: [],
}

/***
 * * Can pass additional object properties along with the action
 * * such as action.payload.value (see Counter.js)
 */

// No need for the break statement in this switch/case because
// the return statement automatically exits and returns a value
const reduxReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'INCREMENT': {
			// This is one way to copy state and update it immutably
			const newState = Object.assign({}, state)
			newState.counter = state.counter + 1
			return newState
		}
		case 'DECREMENT': {
			// This is another (shorter) way to copy & update state immutably
			return {
				...state,
				counter: state.counter - 1,
			}
		}
		case 'ADD': {
			return {
				...state,
				counter: state.counter + action.payload.value,
			}
		}
		case 'SUBTRACT': {
			return {
				...state,
				counter: state.counter - action.payload.value,
			}
		}
		case 'STORE_RESULT': {
			return {
				...state,
				results: state.results.push(state.counter),
			}
		}
	}
	//? This return statement returns the initial or current state if
	//? no case is matched. If this return is absent, then the app will break
	return state
}

export default reduxReducer
