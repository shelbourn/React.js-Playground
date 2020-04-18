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

	render() {
		// Defining const for inline CSS styling via JS/JSX
		const style = {
			backgroundColor: 'white',
			font: 'inherit',
			border: '1px solid blue',
			padding: '8px',
			cursor: 'pointer',
		}

		return (
			<div className="App">
				<h1>Hi, I'm a React App</h1>
				<p>This is really working!</p>
				<button
					style={style}
					onClick={() => this.switchNameHandler('Matthew!!')}
				>
					Switch Name
				</button>
				<Person
					name={this.state.persons[0].name}
					age={this.state.persons[0].age}
				/>
				<Person
					name={this.state.persons[1].name}
					age={this.state.persons[1].age}
					click={this.switchNameHandler.bind(this, 'Matt!')}
					changed={this.nameChangedHandler}
				>
					My Hobbies: Reading
				</Person>
				<Person
					name={this.state.persons[2].name}
					age={this.state.persons[2].age}
				/>
			</div>
		)
	}
}

export default App
