import React, { Component } from 'react'
import { connect } from 'react-redux'
import Person from '../components/Person/Person'
import AddPerson from '../components/AddPerson/AddPerson'
import * as actionTypes from '../store/actions'

class Persons extends Component {
	state = {
		persons: [],
	}

	personAddedHandler = () => {
		const newPerson = {
			id: Math.random(), // not really unique but good enough here!
			name: 'Max',
			age: Math.floor(Math.random() * 40),
		}
		this.setState((prevState) => {
			return { persons: prevState.persons.concat(newPerson) }
		})
	}

	personDeletedHandler = (personId) => {
		this.setState((prevState) => {
			return {
				persons: prevState.persons.filter((person) => person.id !== personId),
			}
		})
	}

	render() {
		return (
			<div>
				<AddPerson personAdded={this.personAddedHandler} />
				{this.state.persons.map((person) => (
					<Person
						key={person.id}
						name={person.name}
						age={person.age}
						clicked={() => this.personDeletedHandler(person.id)}
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
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Persons)
