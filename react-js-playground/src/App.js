// Required to import React and Component class
import React, { Component } from 'react'
import './App.css'

// Component class imported from React library ^^
class App extends Component {
	// render() method is required for React to render HTML to the DOM
	render() {
		return (
			// The below code is JSX (Looks like HTML, but converts to JS)
			<div className="App">
				<h1>Hi! I'm a React App</h1>
			</div>
		)
	}
}

export default App
