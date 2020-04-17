// Component file names start with capital letter (Pascal Case)
import React from 'react'

const person = (props) => {
	return (
		// {props.children} 'children' is a reserved word
		// children are any elements (plain text included) in between
		// the opening and closing component tags
		<div>
			<p>
				I'm {props.name} and I am {props.age} years old!
			</p>
			<p>{props.children}</p>
		</div>
	)
}

export default person
