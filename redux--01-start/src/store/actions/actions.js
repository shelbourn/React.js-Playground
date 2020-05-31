//* Global constants for action types to prevent typos

export const INCREMENT = 'INCREMENT'
export const DECREMENT = 'DECREMENT'
export const ADD = 'ADD'
export const SUBTRACT = 'SUBTRACT'
export const STORE_RESULT = 'STORE_RESULT'
export const DELETE_RESULT = 'DELETE_RESULT'

//? Action Creators (at the very least it must return a type property)
export const increment = () => {
	return {
		type: INCREMENT,
	}
}

export const decrement = () => {
	return {
		type: DECREMENT,
	}
}

export const add = (val) => {
	return {
		type: ADD,
		payload: {
			value: val,
		},
	}
}

export const subtract = (val) => {
	return {
		type: SUBTRACT,
		payload: {
			value: val,
		},
	}
}

export const storeResult = (result) => {
	return {
		type: STORE_RESULT,
		payload: {
			result: result,
		},
	}
}

export const deleteResult = (id) => {
	return {
		type: DELETE_RESULT,
		payload: {
			resultElementID: id,
		},
	}
}
