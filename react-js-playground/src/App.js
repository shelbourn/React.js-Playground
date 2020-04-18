import React, { Component } from 'react'
import './App.css'
import Person from './Person/Person'

// App is a class-based component
const app = (props) => {
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
