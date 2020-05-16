import React, { Component } from 'react'
import axios from '../../../axios'
import './FullPost.css'

class FullPost extends Component {
	state = {
		loadedPost: null,
	}

	//! Using the below method to update the state within
	//! componentDidUpdate will case an INFINITE LOOP of http requests
	//! DO NOT DO THIS!

	//? componentDidUpdate only returns true if new props are received

  //* React Router will not automatically re-render a nested component if a new
  //* link is clicked. You must use componentDidMount() for the initial rendering
  //* and then componentDidUpdated() to render the new content from
  //* the nested component that is requested.
  
	//% Handles the initial rendering of a FullPost
	componentDidMount() {
		console.log(this.props)
		this.loadData()
	}

	//% Handles the re-rendering of FullPost if a new Post is clicked on
	componentDidUpdate() {
		console.log(this.props)
		this.loadData()
	}

	//* Method to load data (fetch from server)
	//* This crazy if block checks first to see if props.id is truthy
	//* then checks if loadedPost is falsy OR loadedPost is truthy AND
	//* loadedPost.id is NOT EQUAL to props.id
	//* Basically this prevents an infinite loop

	loadData = () => {
		if (this.props.match.params.id) {
			if (
				!this.state.loadedPost ||
				(this.state.loadedPost &&
					this.state.loadedPost.id != this.props.match.params.id)
			) {
				axios.get('/posts/' + this.props.match.params.id).then((response) => {
					this.setState({ loadedPost: response.data })
					// console.log(response)
				})
			}
		}
	}

	deletePostHandler = () => {
		axios.delete('/posts/' + this.props.match.params.id).then((response) => {
			console.log(response)
		})
	}

	render() {
		let post = <p style={{ textAlign: 'center' }}>Please select a Post!</p>
		if (this.props.match.params.id) {
			post = <p style={{ textAlign: 'center' }}>Loading...</p>
		}
		if (this.state.loadedPost) {
			post = (
				<div className="FullPost">
					<h1>{this.state.loadedPost.title}</h1>
					<p>{this.state.loadedPost.body}</p>
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
