import * as actionTypes from '../store/actions'

const initialState = {
	persons: [],
}

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.ADD_PERSON: {
			const newPerson = {
				id: Math.random(),
				name: action.payload.name,
				age: action.payload.age,
			}

			// Adding new person to state array
			return {
				...state,
				persons: state.persons.concat(newPerson),
			}
		}

		// Deleting person from state array
		case actionTypes.DELETE_PERSON: {
			const updatedPersons = state.persons.filter(
				(person) => person.id !== action.payload.id
			)
			return {
				...state,
				persons: updatedPersons,
			}
		}
	}
	return state
}

export default reducer
