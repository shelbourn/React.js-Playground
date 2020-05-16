import React, { Component } from 'react'
import { Route } from 'react-router-dom'

import './Courses.css'
import Course from '../Course/Course'
class Courses extends Component {
	state = {
		courses: [
			{ id: 1, title: 'Angular - The Complete Guide' },
			{ id: 2, title: 'Vue - The Complete Guide' },
			{ id: 3, title: 'PWA - The Complete Guide' },
		],
	}

	// Wrapping each course tile with a link element
	courseSelectedHandler = (id, title) => {
		this.props.history.push({
			pathname: this.props.match.url + '/' + id,
			search: '?title=' + title,
		})
	}

	render() {
		return (
			<div>
				<h1>Amazing Udemy Courses</h1>
				<section className="Courses">
					{console.log(this.props)}
					{this.state.courses.map((course) => {
						return (
							<article
								onClick={() =>
									this.courseSelectedHandler(course.id, course.title)
								}
								className="Course"
								key={course.id}
							>
								{course.title}
							</article>
						)
					})}
				</section>
				<Route
					exact
					path={this.props.match.url + '/:courseID'}
					component={Course}
				/>
			</div>
		)
	}
}

export default Courses
