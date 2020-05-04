import React, { Component } from 'react'
// import axios from 'axios'
import './Blog.css'
import Posts from './Posts/Posts'
import { Route } from 'react-router-dom'

//% Axios is a package for easily managing http/ajax requests
//* componentDidMount() is a great place for attaching an http request
//* because it can be executed as a side-effect without resulting
//* in a React re-render before the request has completed.
//? axios has PROMISE objects built-in. Therefore, you can chain .then onto it

//! Handling errors locally within components is a best practice and makes sense

//* To enable Routing for an individual container that you want to route to
//* you use the imported {Route} component

class Blog extends Component {
	render() {
		return (
			<div className="Blog">
				<header>
					<nav>
						<ul>
							<li>
								<a href="/">Home</a>
							</li>
							<li>
								<a href="/new-post">New Post</a>
							</li>
						</ul>
					</nav>
				</header>
				{/* 'path', 'exact', 'render', etc are reserved props/keywords for React Router
         exact holds a bool of true (default is false). If true (exact) then whatever is
         designated by 'path' needs to be exact for the 'render' designation to show.
         Otherwise, if 'exact' is omitted (false) then the path designation will act like a 
         prefix and whatever paths include the 'path' designation will render the value stored
         in 'render' */}
				{/* You can have as many routes as you'd like for the same path
         (including nested and sub-routes. These other routes may render different elements to 
         the same path.) */}
				<Route path="/" exact render={() => <h1>Home</h1>} />
				{/* Here 'Home2' will be the only element displayed on the '/new-post' page because 'exact' is omitted */}
				<Route path="/" render={() => <h1>Home 2</h1>} />
				<Route path="/" exact render={() => <h1>Home 3</h1>} />
			</div>
		)
	}
}

export default Blog
