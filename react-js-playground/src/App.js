import React, { Component } from 'react'
import './App.css'

class App extends Component {
	render() {
		return (
			// Can't use 'class' with JSX because it is a reserved JS keyword
			//'div', 'h1', and other html-esque elements are provided by React library and not actual HTML
			// <div> is the root element in this 'return' statement
			// Best practice to nest everything in 1 root element
			<div className="App">
				{' '}
				<h1>Hi! I'm a React App</h1>
			</div>
		)
	}
}

export default App
