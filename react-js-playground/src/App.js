import React, { Component } from 'react'
import './App.css'
import Radium from 'radium'
import Person from './Person/Person'

class App extends Component {
	state = {
		persons: [
			{ id: '1', name: 'Matt', age: 39 },
			{ id: '2', name: 'Nikki', age: 41 },
			{ id: '3', name: 'Sky', age: 2 },
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
		const style = {
			backgroundColor: 'mediumseagreen',
			color: 'white',
			font: 'inherit',
			border: '2px solid black',
			padding: '8px',
			cursor: 'pointer',
			boxShadow: '0 2px 5px darkGray',
			borderRadius: '10px',
			':hover': {
				backgroundColor: 'lightGreen',
				color: 'black',
			},
		}

		let buttonText = 'Show Names'

		let persons = null

		// Code to manage the 'Persons' array (list)
		if (this.state.showPersons) {
			persons = (
				<div>
					{this.state.persons.map((person, index) => {
						return (
							<Person
								click={() => this.deletePersonHandler(index)}
								name={person.name}
								age={person.age}
								key={person.id}
								changed={(event) => this.nameChangedHandler(event, person.id)}
							/>
						)
					})}
				</div>
			)

			// Dynamically styling output if 'showPersons' is true
			style.backgroundColor = 'indianRed'
			style[':hover'] = { backgroundColor: 'lightcoral' }
			style.color = 'white'
			buttonText = 'Hide Names'
		}

		const classes = []
		if (this.state.persons.length <= 2) {
			classes.push('red') // classes = ['red']
		}
		if (this.state.persons.length <= 1) {
			classes.push('bold') // classes = ['red', 'bold']
		}

		return (
			<div className="App">
				<h1>Hi, I'm a React App</h1>
				<p className={classes.join(' ')}>This is really working!</p>
				<button style={style} onClick={this.togglePersonsHandler}>
					{buttonText}
				</button>
				{persons}
			</div>
		)
	}
}

export default Radium(App)
