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
		case 'DECREMENT':
			{
				return {
					...state,
					counter: state.counter - 1,
				}
			}
			break
		case 'ADD':
			{
				return {
					...state,
					counter: state.counter + 5,
				}
			}
			break
		case 'SUBTRACT':
			{
				return {
					...state,
					counter: state.counter - 5,
				}
			}
			break
	}
	return state
}

export default reduxReducer
