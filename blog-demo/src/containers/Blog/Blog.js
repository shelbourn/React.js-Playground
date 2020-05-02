import React, { Component } from 'react'
import axios from 'axios'
import Post from '../../components/Post/Post'
import FullPost from '../../components/FullPost/FullPost'
import NewPost from '../../components/NewPost/NewPost'
import './Blog.css'

class Blog extends Component {
	//% Axios is a package for easily managing http/ajax requests
	//* componentDidMount() is a great place for attaching an http request
	//* because it can be executed as a side-effect without resulting
	//* in a React re-render before the request has completed.
	//? axios has PROMISE objects built-in. Therefore, you can chain .then onto it

	componentDidMount() {
		axios.get('https://jsonplaceholder.typicode.com/posts')
	}

	render() {
		return (
			<div>
				<section className="Posts">
					<Post />
					<Post />
					<Post />
				</section>
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
