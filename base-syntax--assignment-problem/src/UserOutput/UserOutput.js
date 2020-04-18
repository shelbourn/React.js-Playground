import React from 'react'
import './UserOutput.css'

const userOutput = (props) => {
	return (
		<div className="UserOutput">
			<p>
				Hello world! My name is {props.userName} and this is one of my first
				attempts at building a React app.
			</p>
			<p>
				I'm super excited about this and can't wait to see what I will learn
				along the way!
			</p>
		</div>
	)
}
export default userOutput
