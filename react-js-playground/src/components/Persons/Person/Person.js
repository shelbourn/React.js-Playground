import React, { Component, Fragment } from 'react'
import classes from './Person.css'
import Aux from '../../../hoc/Auxiliary/Auxiliary'

//? To return adjacent JSX elements you can eliminate the wrapping <div></div>
//? and wrap the block in [] and separate the JSX elements
//? (<p></p>, <button></button>, etc) with commas

//? You can also create an HOC (higher order component) and use that component to wrap
//? JSX code block. This component will not actually return any JSX
//? itself.

//? React 16.2 has a built in HOC wrapper component called 'React.Fragment'
//? that you can use instead of building your own empty HOC
//? React.Fragment can be used with the 'dot' notation or can be
//? used without the 'dot' notation by importing React, {Fragment}
//? Then you can just use <Fragement></Fragement>
class Person extends Component {
	render() {
		console.log('[Person.js] rendering...')
		return (
			// <Aux>
			// <React.Fragment>
			<Fragment>
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
				{/* </Aux> */}
				{/* </React.Fragment> */}
			</Fragment>
		)
	}
}

export default Person
