import React, { Component } from 'react'
import axios from '../../../axios'
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
						author: 'Max',
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
		this.props.history.push({ pathname: '/' + id })
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
		}

		return <section className="Posts">{posts}</section>
	}
}

export default Posts
