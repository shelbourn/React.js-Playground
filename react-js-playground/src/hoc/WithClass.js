import React from 'react'

//? WithClass.js (named however you like) is a HOC that will return a <div></div> with assigned
//? classes that can be used as a reusable component to style code blocks easily.

//? Function below wrapped in () because it is returning JSX and not an expression
const withClass = (props) => (
	<div className={props.classes}>{props.children}</div>
)

export default withClass
