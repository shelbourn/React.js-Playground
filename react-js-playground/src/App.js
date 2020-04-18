import React, { useState } from 'react'
import './App.css'
import Person from './Person/Person'

// useState() always returns an array with EXACTLY 2 elements
// The 1st element is the originally set state
// the 2nd element is a function that allows us to update the state
const app = (props) => {
	const stateArr = useState({
		persons: [
			{ name: 'Matt', age: 39 },
			{ name: 'Nikki', age: 41 },
			{ name: 'Skylar', age: 2 },
		],
		otherState: 'some other value',
	})

	return (
		<div className="App">
			<h1>Hi! I'm a React App</h1>
			<p>This is really working!</p>
			<button onClick={this.switchNameHandler}>Switch Name</button>
			<Person
				name={this.state.persons[0].name}
				age={this.state.persons[0].age}
			/>
			<Person name={this.state.persons[1].name} age={this.state.persons[1].age}>
				My Hobbies: Reading
			</Person>
			<Person
				name={this.state.persons[2].name}
				age={this.state.persons[2].age}
			/>
		</div>
	)
}

export default app

// state = {
// 	persons: [
// 		{ name: 'Matt', age: 39 },
// 		{ name: 'Nikki', age: 41 },
// 		{ name: 'Skylar', age: 2 },
// 	],
// 	otherState: 'some other value',
// }

// switchNameHandler = () => {
// 	this.setState({
// 		persons: [
// 			{ name: 'Matthew', age: 39 },
// 			{ name: 'Nikki', age: 41 },
// 			{ name: 'Skylar', age: 3 },
// 		],
// 	})
