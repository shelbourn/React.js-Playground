import React, { Component } from 'react'
import classes from './Person.css'
import Auxiliary from '../../../hoc/Auxiliary'
import withClass from '../../../hoc/withClass'
import PropTypes, { number } from 'prop-types'
import AuthContext from '../../../context/auth-context'

//% The below code is how to focus on the last element touched after a render
//% cycle is complete (this is the older approach):

/* class Person extends Component {
	componentDidMount() {
		this.inputElement.focus()
  }
  
  <input
    key="i3"
    ref={(inputEl) => {
      this.inputElement = inputEl
    }} ></input> */

//? Anytime you call constructor() you must call super() and pass props
//? to both -- constructor(props) {super(props) ... }

//* With this.inputElementRef = React.createRef()
//* React uses a built-in method to automatically create a ref when called
//* This is the more-modern approach to handling this
class Person extends Component {
	constructor(props) {
		super(props)
		this.inputElementRef = React.createRef()
	}

	//! static contextType is only available in class-based components
	//! With this you can simply call 'this.context.authenticated' to return
	//! the authenticated vale of true or false, based on the current state
	//! Provides access to context outside of only JSX elements with <contextTags></contextTags>
	//* RECOMMENDED for class-based components
	static contextType = AuthContext

	componentDidMount() {
		// this.inputElement.focus()
		//% Must use 'current'
		//% This focuses the last element in array of Persons
		//% after React renders the page
		//% 'current' allows access to the current reference
		this.inputElementRef.current.focus()
		console.log(this.context.authenticated)
	}
	render() {
		console.log('[Person.js] rendering...')
		return (
			<Auxiliary>
				{this.context.authenticated ? (
					<p>You're Authenticated!</p>
				) : (
					<p>Please Log in!</p>
				)}
				<p key="i1" onClick={this.props.click}>
					I'm {this.props.name} and I am {this.props.age} years old!
				</p>
				<p key="i2">{this.props.children}</p>
				<input
					key="i3"
					ref={this.inputElementRef}
					// {(inputEl) => {
					// 	this.inputElement = inputEl
					// }}
					type="text"
					onChange={this.props.changed}
					value={this.props.name}
				/>
			</Auxiliary>
		)
	}
}

Person.propTypes = {
	click: PropTypes.func,
	name: PropTypes.string,
	age: number,
	changed: PropTypes.func,
	isAuth: PropTypes.bool,
}

export default withClass(Person, classes.Person)
