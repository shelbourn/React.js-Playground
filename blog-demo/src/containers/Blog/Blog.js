import React, { Component } from 'react'
// import axios from 'axios'
import './Blog.css'
import axios from '../../axios'

//% Axios is a package for easily managing http/ajax requests
//* componentDidMount() is a great place for attaching an http request
//* because it can be executed as a side-effect without resulting
//* in a React re-render before the request has completed.
//? axios has PROMISE objects built-in. Therefore, you can chain .then onto it

//! Handling errors locally within components is a best practice and makes sense

class Blog extends Component {
	state = {
		posts: [],
		selectedPostId: null,
		error: false,
	}

	componentDidMount() {
		axios
			.get('/posts')
			.then((response) => {
				const posts = response.data.slice(0, 4)
				const updatedPosts = posts.map((post) => {
					return {
						...post,
						author: 'Max',
					}
				})
				this.setState({ posts: updatedPosts })
				// console.log(response)
			})
			.catch((error) => {
				this.setState({
					error: true,
				})
				// console.log(error)
			})
	}

	postSelectedHandler = (id) => {
		this.setState({
			selectedPostId: id,
		})
	}

	render() {
		let posts = <p style={{ textAlign: 'center' }}>Something went wrong!</p>
		if (!this.state.error) {
			posts = this.state.posts.map((post) => {
				return (
					<Post
						key={post.id}
						title={post.title}
						author={post.author}
						clicked={() => this.postSelectedHandler(post.id)}
					/>
				)
			})
		}

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
				<section className="Posts">{posts}</section>
			</div>
		)
	}
}

export default Blog
