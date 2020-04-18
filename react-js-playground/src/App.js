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
		// console.log('Was clicked!');
		// DON'T DO THIS: this.state.persons[0].name = 'Matthew';
		this.setState({
			persons: [
				// pass args to 'newName' with .bind(this, 'arg')
				{ name: newName, age: 39 },
				{ name: 'Nikki', age: 41 },
				{ name: 'Skylar', age: 3 },
			],
		})
	}

	render() {
		return (
			<div className="App">
				<h1>Hi, I'm a React App</h1>
				<p>This is really working!</p>
				<button onClick={() => this.switchNameHandler('Matthew!!')}>
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
				>
					My Hobbies: Reading
				</Person>
				<Person
					name={this.state.persons[2].name}
					age={this.state.persons[2].age}
				/>
			</div>
		)
		// return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
	}
}

export default App
