// Component file names start with capital letter (Pascal Case)
import React from 'react'

// Parameter name 'props' is not necessary, but highly recommended
// Props in React take in all property values assigned using JSX
const person = (props) => {
	return (
		<p>
			I'm {props.name} and I am {props.age} years old!
		</p>
	)
}

export default person
