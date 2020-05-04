import React, { Component } from 'react'
// import axios from 'axios'
import './Blog.css'
import Posts from './Posts/Posts'
import { Route, Link } from 'react-router-dom'
import NewPost from './NewPost/NewPost'

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
								{/* 'Link... to="" is essentially the same as <a href=""...></a>
                but it prevents the app from fully reloading everytime a link is clicked.
                Instead, the Link component imported through React Router uses
                routing to only re-render the parts of the DOM that need to be
                without reloading the entire app*/}
								<Link to="/">Home</Link>
							</li>
							<li>
								{/* Below shows examples of advanced routing */}
								<Link
									to={{
										pathname: '/new-post',
										hash: '#submit',
										search: '?quick-submit=true',
									}}
								>
									New Post
								</Link>
							</li>
						</ul>
					</nav>
				</header>
				{/* Use 'component' instead of 'render' to render components */}
				<Route path="/" exact component={Posts} />
				<Route path="/new-post" component={NewPost} />
			</div>
		)
	}
}

export default Blog
