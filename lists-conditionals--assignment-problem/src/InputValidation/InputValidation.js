import React from 'react'

const inputValidation = (props) => {
	let validationOutput = 'Congrats! Your text input is long enough!'

	if (props.inputLength <= 5) {
		validationOutput = 'Sorry! Your text input is not quite long enough yet!'
	}

	return (
		<div>
			<p>{validationOutput}</p>
		</div>
	)
}
export default inputValidation
