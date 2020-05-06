import React, { Component } from 'react'
import axios from '../../../axios'
import { Redirect } from 'react-router-dom'
import './NewPost.css'

class NewPost extends Component {
	state = {
		title: '',
		content: '',
		author: 'Max',
		submitted: false,
	}

	componentDidMount() {
		//* Another way of implementing a 'guard'
		//% If user !auth => this.props.history.replace('/posts')
		console.log(this.props)
	}

	postDataHandler = () => {
		const post = {
			title: this.state.title,
			body: this.state.content,
			author: this.state.author,
		}
		axios.post('/posts', post).then((response) => {
			console.log(response)
			//* This allows us to push a new page without a redirect or changing state
			//* .push() pushes a new page to the web stack so the back button will work
			//* whereas <Redirect> replaces the page on the stack and the back button will not return to the
			//* true previous page
			//* .replace() has the same functionality a <Redirect>
			this.props.history.push('/posts')
			// this.setState({ submitted: true })
		})
	}

	//? Using a conditional <Redirect> outside of a <Switch> statement

	render() {
		let redirect = null
		if (this.state.submitted) {
			redirect = <Redirect to="/posts" />
		}
		return (
			<div className="NewPost">
				{redirect}
				<h1>Add a Post</h1>
				<label>Title</label>
				<input
					type="text"
					value={this.state.title}
					onChange={(event) => this.setState({ title: event.target.value })}
				/>
				<label>Content</label>
				<textarea
					rows="4"
					value={this.state.content}
					onChange={(event) => this.setState({ content: event.target.value })}
				/>
				<label>Author</label>
				<select
					value={this.state.author}
					onChange={(event) => this.setState({ author: event.target.value })}
				>
					<option value="Max">Max</option>
					<option value="Manu">Manu</option>
				</select>
				<button onClick={this.postDataHandler}>Add Post</button>
			</div>
		)
	}
}

export default NewPost
