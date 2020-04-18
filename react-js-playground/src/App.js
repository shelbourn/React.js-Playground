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

	switchNameHandler = (newName) => {
		this.setState({
			persons: [
				{ name: newName, age: 39 },
				{ name: 'Nikki', age: 41 },
				{ name: 'Skylar', age: 3 },
			],
		})
	}

	nameChangedHandler = (event) => {
		this.setState({
			persons: [
				{ name: 'Matt', age: 39 },
				{ name: event.target.value, age: 41 },
				{ name: 'Skylar', age: 3 },
			],
		})
	}

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
					{this.state.persons.map((person) => {
						return <Person name={person.name} age={person.age} />
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
