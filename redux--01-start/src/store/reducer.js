const initialState = {
	counter: 0,
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
			return {
				...state,
				counter: state.counter + 1,
			}
		}
		case 'DECREMENT': {
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
	}
	//? This return statement returns the initial or current state if
	//? no case is matched. If this return is absent, then the app will break
	return state
}

export default reduxReducer
