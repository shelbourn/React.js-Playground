import React, { Component } from 'react'
import axios from 'axios'
import './FullPost.css'

class FullPost extends Component {
	state = {
		loadedPost: null,
	}

	//! Using the below method to update the state within
	//! componentDidUpdate will case an INFINITE LOOP of http requests
	//! DO NOT DO THIS!

	//? componentDidUpdate only returns true if new props are received

	componentDidUpdate() {
		//* This crazy if block checks first to see if props.id is truthy
		//* then checks if loadedPost is falsy OR loadedPost is truthy AND
		//* loadedPost.id is NOT EQUAL to props.id
		//* Basically this prevents an infinite loop
		if (this.props.id) {
			if (
				!this.state.loadedPost ||
				(this.state.loadedPost && this.state.loadedPost.id !== this.props.id)
			) {
				axios
					.get('https://jsonplaceholder.typicode.com/posts/' + this.props.id)
					.then((response) => {
						this.setState({ loadedPost: response.data })
						// console.log(response)
					})
			}
		}
	}

	deletePostHandler = () => {
		axios
			.delete('https://jsonplaceholder.typicode.com/posts/' + this.props.id)
			.then((response) => {
				console.log(response)
			})
	}

	render() {
		let post = <p style={{ textAlign: 'center' }}>Please select a Post!</p>
		if (this.props.id) {
			post = <p style={{ textAlign: 'center' }}>Loading...</p>
		}
		if (this.state.loadedPost) {
			post = (
				<div className="FullPost">
					<h1>{this.state.loadedPost.title}</h1>
					<p>{this.state.loadedPost.content}</p>
					<div className="Edit">
						<button className="Delete" onClick={this.deletePostHandler}>
							Delete
						</button>
					</div>
				</div>
			)
		}
		return post
	}
}

export default FullPost
