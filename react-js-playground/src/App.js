import React, { Component } from 'react'
import classes from './App.css'
import Person from './components/Persons/Person/Person'

class App extends Component {
	//! Logic and global variables go in the main class body
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
		//! Anything that is rendered to the screen including logic
		//! that affects rendered components goes in the render()
		//! method body
		let buttonText = 'Show Names'

		let persons = null

		let btnClass = ''

		// Code to manage the 'Persons' array (list)
		if (this.state.showPersons) {
			persons = (
				<div>
					{this.state.persons.map((person, index) => {
						return (
							// Key must always be on the outer wrapper of an element using the .map() method
							<Person
								key={person.id}
								click={() => this.deletePersonHandler(index)}
								name={person.name}
								age={person.age}
								changed={(event) => this.nameChangedHandler(event, person.id)}
							/>
						)
					})}
				</div>
			)
			// Dynamically styling output if 'showPersons' is true
			buttonText = 'Hide Names'
			btnClass = classes.Red
		}

		const assignedClasses = []
		if (this.state.persons.length <= 2) {
			assignedClasses.push(classes.red) // classes = ['red']
		}
		if (this.state.persons.length <= 1) {
			assignedClasses.push(classes.bold) // classes = ['red', 'bold']
		}

		// JSX/React components that are rendered to the screen go
		//
		return (
			<div className={classes.App}>
				<h1>Hi, I'm a React App</h1>
				<p className={assignedClasses.join(' ')}>This is really working!</p>
				<button className={btnClass} onClick={this.togglePersonsHandler}>
					{buttonText}
				</button>
				{persons}
			</div>
		)
	}
}

export default App
