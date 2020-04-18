import React, { Component } from 'react'
import './App.css'
import Person from './Person/Person'

// ! 'this.property' syntax refers to property in parent class
class App extends Component {
	state = {
		persons: [
			{ name: 'Matt', age: 39 },
			{ name: 'Nikki', age: 41 },
			{ name: 'Skylar', age: 2 },
		],
	}

	// When referencing this handler do not inlcude ()
	// Because then the function would be executed as soon as the
	// code was rendered by the DOM
	switchNameHandler = () => {
		console.log('Was clicked!')
	}

	render() {
		return (
			<div className="App">
				<h1>Hi! I'm a React App</h1>
				<p>This is really working!</p>
				<button onClick={this.switchNameHandler}>Switch Name</button>
				<Person
					name={this.state.persons[0].name}
					age={this.state.persons[0].age}
				/>
				<Person
					name={this.state.persons[1].name}
					age={this.state.persons[1].age}
				>
					My Hobbies: Reading
				</Person>
				<Person
					name={this.state.persons[2].name}
					age={this.state.persons[2].age}
				/>
			</div>
		)
	}
}

export default App
