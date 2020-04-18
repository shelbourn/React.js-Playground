import React, { Component } from 'react'
import './App.css'
import Person from './Person/Person'

class App extends Component {
	state = {
		persons: [
			{ name: 'Matt', age: 39 },
			{ name: 'Nikki', age: 41 },
			{ name: 'Sky', age: 2 },
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

	// Deletes person record when <p> element is clicked
	// .splice() deletes a record at an index by as many elements as indicated
	// .slice() creates a copy of a section of an array, or the entire array by using no arguments
	// Copying the array and then editing that is updating state in an IMMUTABLE fashion
	// and is the BEST PRACTICE
	deletePersonHandler = (personIndex) => {
		// const newPersons = this.state.persons.slice()
		// An alternative to .slice() is the spread operator [...newPersons]
		// The spread [...this.state.persons] is the more MODERN approach
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

		if (this.state.showPersons) {
			persons = (
				<div>
					{this.state.persons.map((person, index) => {
						return (
							<Person
								click={() => this.deletePersonHandler(index)}
								name={person.name}
								age={person.age}
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
