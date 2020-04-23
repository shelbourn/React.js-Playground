import React, { useEffect } from 'react'
import classes from './Cockpit.css'
// {useEffect} hook is the second most important component in React
// after {useState} hook
// {useEffect} is a React hook and NOT a lifecycle hookb
// {useEffect} = componentDidMount & componentDidUpdate combined into one

const cockpit = (props) => {
	// Must pass a function into {useEffect}
	useEffect(() => {
		console.log('[Cockpit.js] useEffect')
		// http request...
		setTimeout(() => {
			alert('Saved data to the cloud!')
		}, 1000)
	}, [props.persons]) // Only triggers on initial page load & when 'persons' updates
	// arg2 = [] empty bracket to trigger only on initial page load and never again
	// arg2 with [] is equivalent to componentDidMount ONLY
	// 2nd argument must be contained in square brackets []

	// Can use {useEffect() as many times as necessary to manage different data}
	// useEffect(() => {...}, [arg2 = data to be targeted by useEffect])
	// arg2 with [props.'field'] to be used when you want to target a dependency

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
