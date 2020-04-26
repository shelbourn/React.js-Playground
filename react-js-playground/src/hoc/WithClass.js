import React from 'react'

//? WithClass.js (named however you like) is a HOC that will return a <div></div> with assigned
//? classes that can be used as a reusable component to style code blocks easily.

//? Function below wrapped in () because it is returning JSX and not an expression

//* HOCs can be used to wrap any components in something that will
//* perform a specific action. For instance: Error handling, CSS styling, Formatting, etc

// //! One method of creating HOCs
//* This type of HOC should be used when modifying the JSX returned (CSS styling, etc)
// const withClass = (props) => (
// 	<div className={props.classes}>{props.children}</div>
// )

// export default withClass

//! Second method of creating HOCs
//! Uses regular JS function syntax
//! Parameter must start with a capital character because it will
//! reference another React component
//! This type of HOC is a regular JS function that returns a React functional
//! component
//! In the below example: WrappedComponent will be the React component(eg App, Persons, etc) that you want to wrap
//! and className is the attribute that we want to apply to the returned JSX

//* This type of HOC should be used when adding some JS logic or something like that

//% WrappedComponent should accept props from the component it is wrapping
//% otherwise no props will be passed and functionality will be broken
//% WrappedComponent can accept props from the component it wraps by using the sread
//% operator

//! adding {...props} to the returned WrappedComponent creates a new props
//! object with new key/value pairs for the component being wrapped by withClass and
//! re-links all the props

const withClass = (WrappedComponent, className) => {
	return (props) => (
		<div className={className}>
			<WrappedComponent {...props} />
		</div>
	)
}
export default withClass
