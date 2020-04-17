import React, { Component } from 'react'
import './App.css'
import Person from './Person/Person'

class App extends Component {
	// !State can only be used when a component (App) extends 'Component'
	// 'State' manages properties from inside a component
	// State can only be used with class-based React components
	// State is a special built-in property, similar to a normal class property
	state = {
		persons: [
			{ name: 'Matt', age: 39 },
			{ name: 'Nikki', age: 41 },
			{ name: 'Skylar', age: 2 },
		],
	}

	render() {
		return (
			<div className="App">
				<h1>Hi! I'm a React App</h1>
				<p>This is really working!</p>
				<button>Switch Name</button>
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
