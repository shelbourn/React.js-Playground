import React, { useEffect, useRef, useContext } from 'react'
import classes from './Cockpit.css'
import PropTypes from 'prop-types'
import AuthContext from '../../context/auth-context'

//! useEffect() is like using componentDidMount & componentDidUpdate in one
//! componentDidMount = useEffect(() => {...}, [])
//! componentDidUpdate = useEffect(() => {...}, [props.field1, props.field2, etc])

//* useContext() Hook is PREFERRED for managing context in functional components
//* static contextType is PREFERRED for managing context in class-based components

const cockpit = (props) => {
	const toggleButtonRef = useRef(null)

	//% 'authContext' can be named however
	//% The argument 'AuthContext' refers to the AuthContext component
	//% we built
	//* This method is PREFERRED for functional components
	const authContext = useContext(AuthContext)

	console.log(authContext.authenticated)

	// Must pass a function into {useEffect}
	//* useEffect() runs after the first React render cycle
	useEffect(() => {
		console.log('[Cockpit.js] useEffect')
		// http request...
		// const timer = setTimeout(() => {
		// 	alert('Saved data to the cloud!')
		// }, 1000)
		//* Automatically clicks the button once the page is rendered
		//* for the first time
		toggleButtonRef.current.click()
		return () => {
			console.log('[Cockpit.js] cleanupwork in useEffect')
		}
	}, []) // Only triggers on initial page load & when 'persons' updates

	useEffect(() => {
		console.log('[Cockpit.js] 2nd useEffect')
		return () => {
			console.log('[Cockpit.js] cleanup work in 2nd useEffect')
		}
	})

	const assignedClasses = []
	let btnClass = ''

	if (props.showPersons) {
		btnClass = classes.Red
	}

	if (props.personsLength <= 2) {
		assignedClasses.push(classes.red) // classes = ['red']
	}
	if (props.personsLength <= 1) {
		assignedClasses.push(classes.bold) // classes = ['red', 'bold']
	}

	return (
		<div className={classes.Cockpit}>
			<h1>{props.title}</h1>
			<p className={assignedClasses.join(' ')}>This is really working!</p>
			<button
				ref={toggleButtonRef}
				className={btnClass}
				onClick={props.togglePersons}
			>
				{props.buttonText}
			</button>
			<button onClick={authContext.login}>Log in</button>
		</div>
	)
}

cockpit.propTypes = {
	showPersons: PropTypes.bool,
	title: PropTypes.string,
	togglePersons: PropTypes.func,
	personsLength: PropTypes.number,
	buttonText: PropTypes.string,
	login: PropTypes.func,
}

// Equivalent to shouldComponentUpdate for Functional Components
export default React.memo(cockpit)
