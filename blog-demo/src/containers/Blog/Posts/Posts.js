import React, { Component } from 'react'
import axios from '../../../axios'
import { Route } from 'react-router-dom'
import FullPost from '../FullPost/FullPost'
import Post from '../../../components/Post/Post'
import './Posts.css'

class Posts extends Component {
	state = {
		posts: [],
	}

	componentDidMount() {
		console.log(this.props)
		axios
			.get('/posts')
			.then((response) => {
				const posts = response.data.slice(0, 4)
				const updatedPosts = posts.map((post) => {
					return {
						...post,
						author: 'Matt Shelbourn',
					}
				})
				this.setState({ posts: updatedPosts })
				// console.log(response)
			})
			.catch((error) => {
				console.log(error)
				// this.setState({
				// 	error: true,
				// })
			})
	}

	//* This will operate the same as wrapping the JSX elements with the <Link> object
	//* but it does it programmatically
	//* This uses the route's .push() method which is part of the history prop
	postSelectedHandler = (id) => {
		this.props.history.push({ pathname: '/posts' + id })
		//? Below also works
		// this.props.history.push('/' + id)
	}

	render() {
		let posts = <p style={{ textAlign: 'center' }}>Something went wrong!</p>
		if (!this.state.error) {
			posts = this.state.posts.map((post) => {
				return (
					// <Link to={'/' + post.id} >
					<Post
						key={post.id}
						title={post.title}
						author={post.author}
						clicked={() => this.postSelectedHandler(post.id)}
					/>
					// </Link>
				)
			})
			return (
				<div>
					<section className="Posts">{posts}</section>
					{/* Creates a nested route which will diplay Posts above
          and FullPost below on page */}
					<Route
						//? this.props.match.url stores current routed to URL
						//? Use this method for creating dynamically assigned
						//? nested routes (USE THIS METHOD FOR NESTED ROUTES).
						path={this.props.match.url + '/:id'}
						exact
						component={FullPost}
					/>
				</div>
			)
		}
	}
}

export default Posts
