// {useState} is a React 'hook' pre-defined function
import React, { useState } from 'react'
import './App.css'
import Person from './Person/Person'

// useState() always returns an array with EXACTLY 2 elements
// The 1st element is the originally set state
// the 2nd element is a function that allows us to update the state
// !!!IMPORTANT!!! When using setState() with hooks, the updated state will REPLACE the original state
// !!!IMPORTANT!!! In order to merge old state data with updated state data
// !!!IMPORTANT!!! you have to manually add it to the function that updates the state
// !!!IMPORTANT!!! You can bypass this problem with multiple useState() calls
const app = (props) => {
	// this is using array destructuring to assign the array elements
	// of setState() to variables 'personsState' and 'setPersonsState'
	const [personsState, setPersonsState] = useState({
		persons: [
			{ name: 'Matt', age: 39 },
			{ name: 'Nikki', age: 41 },
			{ name: 'Skylar', age: 2 },
		],
	})

	const [otherState, setOtherState] = useState('some other value')

	console.log(personsState, otherState)

	const switchNameHandler = () => {
		setPersonsState({
			persons: [
				{ name: 'Matthew', age: 39 },
				{ name: 'Nikki', age: 41 },
				{ name: 'Skylar', age: 3 },
			],
		})
	}

	return (
		<div className="App">
			<h1>Hi! I'm a React App</h1>
			<p>This is really working!</p>
			<button onClick={switchNameHandler}>Switch Name</button>
			<Person
				name={personsState.persons[0].name}
				age={personsState.persons[0].age}
			/>
			<Person
				name={personsState.persons[1].name}
				age={personsState.persons[1].age}
			>
				My Hobbies: Reading
			</Person>
			<Person
				name={personsState.persons[2].name}
				age={personsState.persons[2].age}
			/>
		</div>
	)
}
export default app
