import React, { Component } from 'react'
import axios from 'axios'
import Post from '../../components/Post/Post'
import FullPost from '../../components/FullPost/FullPost'
import NewPost from '../../components/NewPost/NewPost'
import './Blog.css'

//% Axios is a package for easily managing http/ajax requests
//* componentDidMount() is a great place for attaching an http request
//* because it can be executed as a side-effect without resulting
//* in a React re-render before the request has completed.
//? axios has PROMISE objects built-in. Therefore, you can chain .then onto it

class Blog extends Component {
	state = {
		posts: [],
	}

	componentDidMount() {
		axios.get('https://jsonplaceholder.typicode.com/posts').then((response) => {
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
	}

	render() {
		const posts = this.state.posts.map((post) => {
			return <Post key={post.id} title={post.title} author={post.author} />
		})

		return (
			<div>
				<section className="Posts">{posts}</section>
				<section>
					<FullPost />
				</section>
				<section>
					<NewPost />
				</section>
			</div>
		)
	}
}

export default Blog
