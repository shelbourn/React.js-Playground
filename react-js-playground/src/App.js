import React, { Component } from 'react'
import './App.css'
import Person from './Person/Person'

// Stateful components included a state property (class-based state)
// or useState() hook (functional state)
// Stateful components are referred to as 'Smart' or 'Container' components
// Stateful components are capable of managing state
// Stateful components contain the state of your application

// Stateless components ('dumb' or 'presentational' components) do not manage state
// Our Person component is an example of a stateless component
// It is best to include as many stateless components as possible
// and as few stateful components as possible because data come from the stateless
// components and the logic happens in the stateful components
// Apps are much easier to maintain with fewer stateful components because the app's logic is found
// in one place and the data (coming from the stateless components) can be updated/added to/manipulated
// as needed
class App extends Component {
	state = {
		persons: [
			{ name: 'Matt', age: 39 },
			{ name: 'Nikki', age: 41 },
			{ name: 'Sky', age: 2 },
		],
		otherState: 'some other value',
	}

	switchNameHandler = () => {
		// console.log('Was clicked!');
		// DON'T DO THIS: this.state.persons[0].name = 'Matthew';
		this.setState({
			persons: [
				{ name: 'Matthew', age: 39 },
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
				<button onClick={this.switchNameHandler}>Switch Name</button>
				<Person
					name={this.state.persons[0].name}
					age={this.state.persons[0].age}
				/>
				<Person
					name={this.state.persons[1].name}
					age={this.state.persons[1].age}
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
