// Component file names start with capital letter (Pascal Case)
import React from 'react'

// Function can have lowercase name
// Parameter name 'props' is not necessary, but highly recommended
// Props in React take in all property values assigned using JSX
const person = (props) => {
	return (
		<p>I'm a Person and I am {Math.floor(Math.random() * 30)} years old!</p>
	)
}

export default person
