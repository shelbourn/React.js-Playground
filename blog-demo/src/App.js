import React, { Component } from 'react'
import { BrowserRouter } from 'react-router-dom'
import Blog from './containers/Blog/Blog'

//! For React Router, you must wrap the component you want to
//! enable routes in, in either App.js (root js file) or index.js
//! Wrap this component with the imported {BrowserRouter} component

//* With React Router enabled, it makes sense to move routed components
//* into the Containers folder because they are more like containers now
//* since they are not included components in other components anymore
class App extends Component {
	render() {
		return (
			//* <BrowserRouter> is now the app's router
			//* Any sub-component which is added between the BrowserRouter
			//* tags will now have routing enabled.

			//? You can change the root path using syntax below

			// <BrowserRouter basename='/my-app'>
			<BrowserRouter>
				<div className="App">
					<Blog />
				</div>
			</BrowserRouter>
		)
	}
}

export default App
