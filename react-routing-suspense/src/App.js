import React, { Component, Suspense } from 'react'
import { BrowserRouter, Route, NavLink } from 'react-router-dom'

import User from './containers/User'
import Welcome from './containers/Welcome'

//* Named exports are not supported in React.lazy()
const Posts = React.lazy(() => import('./containers/Posts'))

class App extends Component {
	render() {
		return (
			<BrowserRouter>
				{/* React.Fragment is the equivalent to our Aux component but
      it is now built into React */}
				<React.Fragment>
					<nav>
						<NavLink to="/user">User Page</NavLink> |&nbsp;
						<NavLink to="/posts">Posts Page</NavLink>
					</nav>
					<Route path="/" component={Welcome} exact />
					<Route path="/user" component={User} />
					<Route
						path="/posts"
						render={() => (
							//* Suspense wraps the lazy-loaded component (const in our case)
							//* fallback prop is something that shows while the component is being loaded
							//* fallback is convenient for displaying spinners, etc
							<Suspense fallback={<div>Loading...</div>}>
								<Posts />
							</Suspense>
						)}
					/>
				</React.Fragment>
			</BrowserRouter>
		)
	}
}

export default App
