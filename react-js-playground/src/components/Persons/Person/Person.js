import React, { Component } from 'react'
import classes from './Person.css'
import Auxiliary from '../../../hoc/Auxiliary'
import withClass from '../../../hoc/withClass'

class Person extends Component {
	render() {
		console.log('[Person.js] rendering...')
		return (
			<Auxiliary>
				<p onClick={this.props.click}>
					I'm {this.props.name} and I am {this.props.age} years old!
				</p>
				<p>{this.props.children}</p>
				<input
					type="text"
					onChange={this.props.changed}
					value={this.props.name}
				/>
			</Auxiliary>
		)
	}
}

//! This export will wrap the Person component with what is returned by the withClass
//! function
//* Therefore NO PROPS from Person will be passed automatically
//* In order to pass props from the child components you must add a
//* spread operator to the props taken in in the withClass component
//% See withClass Component

//! Technically, exporting a component wrapped by withClasses will
//! export whatever is returned by the withClass function
export default withClass(Person, classes.Person)
