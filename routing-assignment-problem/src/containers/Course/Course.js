import React, { Component } from 'react'
import queryString from 'query-string'

class Course extends Component {
	state = {
		courseTitle: '',
	}

	//? Using query params to pass and extract course title

	componentDidMount() {
		const query = queryString.parse(this.props.location.search)
		this.setState({ courseTitle: query.title })
	}

	render() {
		console.log(this.props)
		return (
			<div onClick={this.props.clicked}>
				<h1>{this.state.courseTitle}</h1>
				<p>
					You selected the Course with ID: {this.props.match.params.courseID}
				</p>
			</div>
		)
	}
}

export default Course
