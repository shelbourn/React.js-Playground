import React, { useEffect } from 'react'
import classes from './Cockpit.css'

//! useEffect() is like using componentDidMount & componentDidUpdate in one
//! componentDidMount = useEffect(() => {...}, [])
//! componentDidUpdate = useEffect(() => {...}, [props.field1, props.field2, etc])

const cockpit = (props) => {
	// Must pass a function into {useEffect}
	useEffect(() => {
		console.log('[Cockpit.js] useEffect')
		// http request...
		const timer = setTimeout(() => {
			alert('Saved data to the cloud!')
		}, 1000)
		return () => {
			clearTimeout(timer)
			console.log('[Cockpit.js] cleanup work in useEffect')
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

	if (props.persons.length <= 2) {
		assignedClasses.push(classes.red) // classes = ['red']
	}
	if (props.persons.length <= 1) {
		assignedClasses.push(classes.bold) // classes = ['red', 'bold']
	}

	return (
		<div className={classes.Cockpit}>
			<h1>{props.title}</h1>
			<p className={assignedClasses.join(' ')}>This is really working!</p>
			<button className={btnClass} onClick={props.togglePersons}>
				{props.buttonText}
			</button>
		</div>
	)
}
export default cockpit
