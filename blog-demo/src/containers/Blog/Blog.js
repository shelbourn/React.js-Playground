import React, { Component } from 'react'
// import axios from 'axios'
import './Blog.css'
import Posts from './Posts/Posts'
import { Route, NavLink, Switch } from 'react-router-dom'
import NewPost from './NewPost/NewPost'
import FullPost from './FullPost/FullPost'

//% Axios is a package for easily managing http/ajax requests
//* componentDidMount() is a great place for attaching an http request
//* because it can be executed as a side-effect without resulting
//* in a React re-render before the request has completed.
//? axios has PROMISE objects built-in. Therefore, you can chain .then onto it

//! Handling errors locally within components is a best practice and makes sense

//* To enable Routing for an individual container that you want to route to
//* you use the imported {Route} component

//% The 'path' property in the Link component ALWAYS uses absolute paths and not
//% relative ones. Meaning that the designated 'path' is always appended immediately
//% following the base URL

//? In order to build a relative path you can use...
//? this.props.match.url + '/new-post'

//! To be able to assign classes to links use the NavLink component imported via React Router

class Blog extends Component {
	render() {
		return (
			<div className="Blog">
				<header>
					<nav>
						<ul>
							<li>
								{/* 'Link... to="" is essentially the same as <a href=""...></a>
                but it prevents the app from fully reloading everytime a link is clicked.
                Instead, the Link component imported through React Router uses
                routing to only re-render the parts of the DOM that need to be
                without reloading the entire app*/}

								{/* Use exact with the Link/NavLink also if it is used in the Route
                This is essential for adding CSS styles to active links.
                Otherwise, all links that start with '/' (which is all links) will have the active
                CSS class applied. */}

								{/* Override the default class (active) assigned by NavLink for active links
                using activeClassName*/}

								{/* Assign inline CSS style to NavLink using activeStyle = {{...}} */}
								<NavLink
									to="/"
									exact
									activeClassName="my-active"
									activeStyle={{ color: 'steelBlue' }}
								>
									Home
								</NavLink>
							</li>
							<li>
								{/* Below shows examples of advanced routing */}
								<NavLink
									to={{
										// * This pathname would dynamically build a relative path
										// pathname: this.props.match.url + '/new-post',
										pathname: '/new-post',
										hash: '#submit',
										search: '?quick-submit=true',
									}}
								>
									New Post
								</NavLink>
							</li>
						</ul>
					</nav>
				</header>
				{/* Use 'component' instead of 'render' to render components */}
				{/* To pass dynamic routes use path="/:anything-you-want" */}

				{/* The Switch component imported via React Router will
        return the first occurrence of a given route path and stop. No
        other paths will be returned (multiple route will not be shown at once) */}
				<Route path="/" exact component={Posts} />
				<Switch>
					<Route path="/new-post" component={NewPost} />
					<Route path="/:id" exact component={FullPost} />
				</Switch>
			</div>
		)
	}
}

export default Blog
