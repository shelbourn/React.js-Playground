const initialState = {
	counter: 0,
}

const reduxReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'INCREMENT':
			{
				return {
					...state,
					counter: state.counter + 1,
				}
			}
			break
	}
	return state
}

export default reduxReducer
