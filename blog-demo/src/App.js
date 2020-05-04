import React, { Component } from 'react'
import { BrowserRouter } from 'react-router-dom'
import Blog from './containers/Blog/Blog'

//! For React Router, you must wrap the component you want to
//! enable routes in, in either App.js (root js file) or index.js
class App extends Component {
	render() {
		return (
			//* <BrowserRouter> is now the app's router
			//* Any sub-component which is added between the BrowserRouter
			//* tags will now have routing enabled.

			<BrowserRouter>
				<div className="App">
					<Blog />
				</div>
			</BrowserRouter>
		)
	}
}

export default App
