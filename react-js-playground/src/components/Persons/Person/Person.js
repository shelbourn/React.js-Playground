import React, { Component } from 'react'
import classes from './Person.css'
import Aux from '../../../hoc/Auxiliary/Auxiliary'

//? To return adjacent JSX elements you can eliminate the wrapping <div></div>
//? and wrap the block in [] and separate the JSX elements
//? (<p></p>, <button></button>, etc) with commas

//? You can also create an HOC (higher order component) and use that component to wrap
//? JSX code block. This component will not actually return any JSX
//? itself.
class Person extends Component {
	render() {
		console.log('[Person.js] rendering...')
		return (
			<Aux>
				{/* // <div className={classes.Person}> */}
				<p onClick={this.props.click}>
					I'm {this.props.name} and I am {this.props.age} years old!
				</p>
				<p>{this.props.children}</p>
				<input
					type="text"
					onChange={this.props.changed}
					value={this.props.name}
				/>
				{/* // </div> */}
			</Aux>
		)
	}
}

export default Person
