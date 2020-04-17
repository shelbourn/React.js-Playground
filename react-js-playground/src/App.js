import React, { Component } from 'react'
import './App.css'
// Component must have uppercase name when importing
// Components with lowercase names are reserved for native HTML syntax
import Person from './Person/Person'

class App extends Component {
	render() {
		return (
			<div className="App">
				<h1>Hi! I'm a React App</h1>
				<p>This is really working!</p>
				<Person />
			</div>
		)
	}
}

export default App
