import React from 'react'
import './CharOutput.css'

const charOutput = (props) => {
	return (
		<div className="CharOutput" onClick={props.clicked}>
			{props.character}
		</div>
	)
}
export default charOutput
