import React, { Component } from 'react'
import './App.css'
import Person from './Person/Person'

class App extends Component {
	// !State can only be used when a component (App) extends 'Component'
	// 'State' manages properties from inside a component
	// State can only be used with class-based React components
	state

	render() {
		return (
			<div className="App">
				<h1>Hi! I'm a React App</h1>
				<p>This is really working!</p>
				<button>Switch Name</button>
				<Person name="Matt" age="39" />
				<Person name="Nikki" age="41">
					My Hobbies: Reading
				</Person>
				<Person name="Skylar" age="2" />
			</div>
		)
	}
}

export default App
