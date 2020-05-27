import React, { Component } from 'react'
import { connect } from 'react-redux'
import Person from '../components/Person/Person'
import AddPerson from '../components/AddPerson/AddPerson'
import * as actionTypes from '../store/actions'

class Persons extends Component {
	state = {
		persons: [],
	}

	render() {
		return (
			<div>
				<AddPerson personAdded={this.props.onPersonAdded} />
				{this.props.pers.map((person) => (
					<Person
						key={person.id}
						name={person.name}
						age={person.age}
						clicked={() => this.props.onePersonDeleted(person.id)}
					/>
				))}
			</div>
		)
	}
}

// Mapping state to props
const mapStateToProps = (state) => {
	return {
		pers: state.persons,
	}
}

// Mapping dispatch actions to props
const mapDispatchToProps = (dispatch) => {
	return {
		onPersonAdded: () => dispatch({ type: actionTypes.ADD_PERSON }),
		onePersonDeleted: (id) =>
			dispatch({ type: actionTypes.DELETE_PERSON, payload: { id: id } }),
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Persons)
