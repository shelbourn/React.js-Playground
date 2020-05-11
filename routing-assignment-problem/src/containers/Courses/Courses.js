import React, { Component } from 'react'

import './Courses.css'
import '../Course/Course'

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
			pathname: this.props.match.url + '/' + id + '/?title=' + title,
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
			</div>
		)
	}
}

export default Courses
