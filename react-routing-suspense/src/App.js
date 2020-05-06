import React, { Component, Suspense } from 'react'
import { BrowserRouter, Route, NavLink } from 'react-router-dom'

import User from './containers/User'
import Welcome from './containers/Welcome'

//!!!! IMPORTANT NOTE ABOUT REACT ROUTER AND SERVERS !!!!!
//! SERVER WILL NOT KNOW ABOUT THE REACT ROUTES SINCE IT HANDLES REQUESTS BEFORE REACT SEES THEM
//! THEREFORE, WE ALWAYS NEED TO FORWARD EVERY...EVERY REQUEST TO INDEX.HTML OTHERWISE A 404 ERROR WILL
//! BE RETURNED.

//? Suspense is NOT avaialable for Server Side Rendered (SSR) apps

//* Named exports are not supported in React.lazy()
const Posts = React.lazy(() => import('./containers/Posts'))

class App extends Component {
	state = {
		showPosts: false,
	}

	modeHandler = () => {
		this.setState(prevState => {
			return { showPosts: !prevState.showPosts }
		})
	}

	render() {
		return (
			<React.Fragment>
				<button onClick={this.modeHandler}>Toggle Mode</button>
				{this.state.showPosts ? (
					<Suspense fallback={<div>Loading...</div>}>
						<Posts />
					</Suspense>
				) : (
					<User />
				)}
			</React.Fragment>
			// <BrowserRouter>
			// 	{/* React.Fragment is the equivalent to our Aux component but
			// it is now built into React */}
			// 	<React.Fragment>
			// 		<nav>
			// 			<NavLink to="/user">User Page</NavLink> |&nbsp;
			// 			<NavLink to="/posts">Posts Page</NavLink>
			// 		</nav>
			// 		<Route path="/" component={Welcome} exact />
			// 		<Route path="/user" component={User} />
			// 		<Route
			// 			path="/posts"
			// 			render={() => (
			// 				//* Suspense wraps the lazy-loaded component (const in our case)
			// 				//* fallback prop is something that shows while the component is being loaded
			// 				//* fallback is convenient for displaying spinners, etc
			// 				<Suspense fallback={<div>Loading...</div>}>
			// 					<Posts />
			// 				</Suspense>
			// 			)}
			// 		/>
			// 	</React.Fragment>
			// </BrowserRouter>
		)
	}
}

export default App
