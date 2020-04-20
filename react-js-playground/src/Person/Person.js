import React from 'react'
import styled from 'styled-components'
// import './Person.css'

// Using styled-components to style our output
// Must assign the styled.div to a React component using an uppercase name (StyledDiv)
// Each property listed in a styled-component section returns a separate React component
const StyledDiv = styled.div`
	width: 60%;
	margin: 16px auto;
	border: 2px solid black;
	box-shadow: 0 2px 3px cornflowerblue;
	border-radius: 15px;
	padding: 16px;
	text-align: center;
	font-family: sans-serif;
	font-variant: small-caps;

	@media (min-width: 500px) : {
		width: 450px;
	}
`

const person = (props) => {
	return (
		// <div className="Person" style={style}>
		<StyledDiv>
			<p onClick={props.click}>
				I'm {props.name} and I am {props.age} years old!
			</p>
			<p>{props.children}</p>
			<input type="text" onChange={props.changed} value={props.name} />
		</StyledDiv>
	)
}

export default person
