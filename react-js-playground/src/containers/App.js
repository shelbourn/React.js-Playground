import React, { Component } from 'react'
import classes from './App.css'
import Persons from '../components/Persons/Persons'
import Cockpit from '../components/Cockpit/Cockpit'

/***********
 * ! Class-based components:
 *
 * class XP extends component
 * Access to State
 * Lifecycle Hooks
 * Access State & Props via "this"
 *    this.state.XY & this.props.XY
 * ! Use if you need to manage State or access to Lifecycle hooks
 * ! and you don't want to use React Hooks
 *
 * ! Functional Components:
 *
 * const XY = props => {...}
 * Access to State (useState())
 * No access to Lifecycle Hooks
 * Access Props via "props" (as a normal function/variable call)
 *     props.XY
 * ! Use in all other cases
 */
class App extends Component {
	state = {
		persons: [
			{ id: '1', name: 'Matt', age: 39 },
			{ id: '2', name: 'Nikki', age: 41 },
			{ id: '3', name: 'Sky', age: 2 },
			{ id: '4', name: 'Audrey', age: 70 },
		],
		otherState: 'some other value',
		showPersons: false,
	}

	// Changes name when user types input
	nameChangedHandler = (event, id) => {
		// Returns index of person with matching ID as arg
		const personIndex = this.state.persons.findIndex((p) => {
			return p.id === id
		})

		// Creates a duplicate object of person at returned index
		const person = {
			...this.state.persons[personIndex],
		}

		// Assigns person.name to handler input
		person.name = event.target.value

		// Creates duplicate of state array
		const newPersons = [...this.state.persons]

		// Assigns updated/copied person value to new array at same index
		newPersons[personIndex] = person

		// Updates state with copied/updated newPersons array
		this.setState({ persons: newPersons })
	}

	// Deletes person record when the <Person> element is clicked
	deletePersonHandler = (personIndex) => {
		const newPersons = [...this.state.persons]
		newPersons.splice(personIndex, 1)
		this.setState({ persons: newPersons })
	}

	// Shows/Hides all person records
	togglePersonsHandler = () => {
		const doesShow = this.state.showPersons
		this.setState({ showPersons: !doesShow })
	}

	render() {
		let buttonText = 'Show Names'

		let persons = null

		// Code to manage the 'Persons' array (list)
		if (this.state.showPersons) {
			persons = (
				<Persons
					persons={this.state.persons}
					clicked={this.deletePersonHandler}
					changed={this.nameChangedHandler}
				/>
			)

			// Dynamically styling output if 'showPersons' is true
			buttonText = 'Hide Names'
		}

		return (
			<div className={classes.App}>
				<Cockpit
					persons={this.state.persons}
					showPersons={this.state.showPersons}
					togglePersons={this.togglePersonsHandler}
					buttonText={buttonText}
				/>
				{persons}
			</div>
		)
	}
}

export default App
