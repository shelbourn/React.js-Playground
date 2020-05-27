import * as actionTypes from '../store/actions'

const initialState = {
	persons: [],
}

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.ADD_PERSON: {
			const newPerson = {
				id: Math.random(),
				name: 'Matt',
				age: Math.floor(Math.random() * 40),
			}

			return {
				...state,
				...state.persons,
				persons: state.persons.concat(newPerson),
			}
		}

		case actionTypes.DELETE_PERSON: {
			return {
				...state,
				...state.persons,
				persons: state.persons.filter(
					(person) => person.payload.id !== personId
				),
			}
		}
	}
}

export default reducer
