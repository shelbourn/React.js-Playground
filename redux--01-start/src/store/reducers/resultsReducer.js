import * as actionTypes from '../store/actions'

const initialState = {
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
const resultsReducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.STORE_RESULT: {
			return {
				...state,
				//! Use .concat() here because .push() does not update
				//! the state immutably, it will still modify the original state
				//! .concat() adds an array element to a copied array
				results: state.results.concat({ id: new Date(), value: state.counter }),
			}
		}
		case actionTypes.DELETE_RESULT: {
			//? Method one for copying/updating an array in state
			//? Below will not create a deep clone so if the array contains objects
			//? then those objects will have to be copied too
			//? The .splice() method MUST be performed on a copy of the array in state
			//? because .splice() will act on the original array if not
			// const id = 2
			// const newArray = [...state.results]
			// newArray.splice(id, 1)

			//? Method two for copying/updating an array in state
			//? .filter() creates a new array whose elements meet the criteria
			//? of the .filter() function
			//? In this filter we are returning true if the element's ID does not match
			//? the ID of the element we are receiving an action from (element clicked on to delete it)
			const updatedArray = state.results.filter(
				(result) => result.id !== action.payload.resultElementID
			)
			return {
				...state,
				results: updatedArray,
			}
		}
	}
	//? This return statement returns the initial or current state if
	//? no case is matched. If this return is absent, then the app will break
	return state
}

export default resultsReducer
