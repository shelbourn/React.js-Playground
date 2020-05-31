//* Global constants for action types to prevent typos

export const INCREMENT = 'INCREMENT'
export const DECREMENT = 'DECREMENT'
export const ADD = 'ADD'
export const SUBTRACT = 'SUBTRACT'
export const STORE_RESULT = 'STORE_RESULT'
export const DELETE_RESULT = 'DELETE_RESULT'

//? Action Creators (at the very least it must return a type property)
const increment = () => {
	return {
		type: INCREMENT,
	}
}
