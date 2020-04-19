import React from 'react'

const validation = (props) => {
	let validationMessage = 'Congrats! Your text input is long enough!'
	if (props.inputLength <= 5) {
		validationMessage = "Sorry! Your text input isn't long enough yet!"
	}
	return (
		<div>
			<p>{validationMessage}</p>
		</div>
	)
}
export default validation
