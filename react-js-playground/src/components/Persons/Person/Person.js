import React, { Component } from 'react'
import classes from './Person.css'
import Auxiliary from '../../../hoc/Auxiliary'
import withClass from '../../../hoc/withClass'
import PropTypes, { number } from 'prop-types'

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

//* PropTypes is a component brought in by 'prop-types' that
//* allows you to designate what types of props (name and data type) are used for either
//* functional or class-based components
//* PropTypes is especially important when you are building a component library
//* to be shared with a team of devs
Person.propTypes = {
	click: PropTypes.func,
	name: PropTypes.string,
	age: number,
	changed: PropTypes.func,
}

export default withClass(Person, classes.Person)
