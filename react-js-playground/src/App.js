import React, { Component } from 'react'
import './App.css'
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
	nameChangedHandler = (event) => {
		this.setState({
			persons: [
				{ name: 'Matt', age: 39 },
				{ name: event.target.value, age: 41 },
				{ name: 'Skylar', age: 3 },
			],
		})
	}

	// Deletes person record when the <Person> element is clicked
	deletePersonHandler = (personIndex) => {
		// or const newPersons = this.state.persons.slice()
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
			backgroundColor: 'lightGrey',
			font: 'inherit',
			border: '2px solid black',
			padding: '8px',
			cursor: 'pointer',
			boxShadow: '0 2px 5px cornflowerblue',
			borderRadius: '10px',
		}

		let persons = null

		// Key properties (props) are required by React
		// Key properties are built-in to React, but you have to define them
		// Key props help to efficiently update React components
		// Key props must be unique identifiers for each item

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
							/>
						)
					})}
				</div>
			)
		}

		return (
			<div className="App">
				<h1>Hi, I'm a React App</h1>
				<p>This is really working!</p>
				<button style={style} onClick={this.togglePersonsHandler}>
					Show/Hide Names
				</button>
				{persons}
			</div>
		)
	}
}

export default App
