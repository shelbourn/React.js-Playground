import React, { useEffect } from 'react'
import classes from './Cockpit.css'
// {useEffect} hook is the second most important component in React
// after {useState} hook
// {useEffect} is a React hook and NOT a lifecycle hookb

const cockpit = (props) => {
	// Must pass a function into {useEffect}
	useEffect(() => {
		console.log('[Cockpit.js] useEffect')
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
