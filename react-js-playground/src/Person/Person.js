// Component file names start with capital letter (Pascal Case)
import React from 'react'

// Function can have lowercase name
const person = () => {
	return (
		// To render JS code within JSX it must be wrapped in {}
		<p>I'm a Person and I am {Math.floor(Math.random() * 30)} years old!</p>
	)
}

export default person
