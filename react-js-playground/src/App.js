import React, { Component } from 'react'
import './App.css'

class App extends Component {
	render() {
		return (
			<div className="App">
				<h1>Hi! I'm a React App</h1>
			</div>
		)

		/****** 
     * The code above ends in the same result and compiles the same,
     * but the code below is much more cumbersome to work with
     * 
		// createElement('HTML Component', 'JS Obj', Children of HTML Component)
		return React.createElement(
			'div',
			null,
			// Below gets React to recognize 'h1' as an HTML element
			// React.createElement('h1', null, 'Does this work now?')

			// Below instead of 'null' we pass a JS object containing a class assignment to apply CSS styling
			React.createElement('h1', { className: 'App' }, 'Does this work now?')
    )
    */
	}
}

export default App
