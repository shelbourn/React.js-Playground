import React from 'react'
import { withRouter } from 'react-router-dom'
import './Post.css'

//* withRouter is a HOC imported via React Router used
//* to wrap components and then pass on the React Router props to
//* that wrapped component (eg the 'match', 'location', etc props)

const post = (props) => {
	console.log(props)

	return (
		<article className="Post" onClick={props.clicked}>
			<h1>{props.title}</h1>
			<div className="Info">
				<div className="Author">{props.author}</div>
			</div>
		</article>
	)
}

export default withRouter(post)
