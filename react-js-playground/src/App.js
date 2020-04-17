import React, { Component } from 'react'
import './App.css'
import Person from './Person/Person'

class App extends Component {
	render() {
		return (
			// 'Hy Hobbies...' is passed between the component tags
			// this type of input is referred to as a 'child' prop
			<div className="App">
				<h1>Hi! I'm a React App</h1>
				<p>This is really working!</p>
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
