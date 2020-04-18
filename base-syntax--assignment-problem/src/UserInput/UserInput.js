import React from 'react'

const userInput = (props) => {
	const style = {
		backgroundColor: 'white',
		fontFamily: 'sans-serif',
		margin: '8px auto',
		cursor: 'pointer',
		font: 'blue',
		border: '2px solid black',
		padding: '6px',
		boxShadow: '0 2px 5px cornflowerblue',
		width: '60%',
	}
	return (
		<input
			style={style}
			type="text"
			onChange={props.changedName}
			value={props.userName}
		/>
	)
}
export default userInput
