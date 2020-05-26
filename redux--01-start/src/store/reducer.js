const initialState = {
	counter: 0,
	results: [],
}

/***
 * * Can pass additional object properties along with the action
 * * such as action.payload.value (see Counter.js)
 */

/***
 * ! Always use .concat() to update arrays in state immutably and NOT .push()
 * ! .push() will update the original state, even if the state has already been copied
 * ! .concat() will add elements to a new copy of the array in state
 */

// No need for the break statement in this switch/case because
// the return statement automatically exits and returns a value
const reduxReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'INCREMENT': {
			// This is one way to copy state and update it immutably
			// NOT A DEEP CLONE
			const newState = Object.assign({}, state)
			newState.counter = state.counter + 1
			return newState
		}
		case 'DECREMENT': {
			// This is another (shorter) way to copy & update state immutably
			// NOT A DEEP CLONE
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
				//! Use .concat() here because .push() does not update
				//! the state immutably, it will still modify the original state
				//! .concat() adds an array element to a copied array
				results: state.results.concat({ id: new Date(), value: state.counter }),
			}
		}
	}
	//? This return statement returns the initial or current state if
	//? no case is matched. If this return is absent, then the app will break
	return state
}

export default reduxReducer
