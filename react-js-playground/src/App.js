import React, { Component } from 'react'
import './App.css'
import Person from './Person/Person'

// App is a class-based component
class App extends Component {
	state = {
		persons: [
			{ name: 'Matt', age: 39 },
			{ name: 'Nikki', age: 41 },
			{ name: 'Skylar', age: 2 },
		],
		// setState() will not affect the otherState property
		otherState: 'some other value',
	}

	switchNameHandler = () => {
		// console.log('Was clicked!')
		// !DON'T DO THIS! this.state.persons[0].name = 'Matthew'
		// Must use this.setState({}) to modify/manipulate state data
		this.setState({
			persons: [
				{ name: 'Matthew', age: 39 },
				{ name: 'Nikki', age: 41 },
				{ name: 'Skylar', age: 3 },
			],
		})
	}

	// Person is an example of functional component
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
