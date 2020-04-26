import React, { Component } from 'react'
import classes from './App.css'
import Persons from '../components/Persons/Persons'
import Cockpit from '../components/Cockpit/Cockpit'
import withClass from '../hoc/withClass'
import Auxiliary from '../hoc/Auxiliary'
import AuthContext from '../context/auth-context'

class App extends Component {
	constructor(props) {
		super(props)
		console.log('[App.js] constructor')
	}

	/**
	 * !!! VERY IMPORTANT: Although setState() is called synchronously, IT IS NOT
	 * !!! GUARANTEED TO PERFORM A SYNCHRONOUS DOM RENDER!!
	 * !!! setState() will store the update and React will decide when is a good time
	 * !!! to re-render the DOM. With small apps, this most-likely will happen
	 * !!! instantaneously, but with bigger apps IT MAY BE DELAYED!!!
	 * !!! Therefore, using setState({XYZ: this.state.XYZ}) is NOT how to properly
	 * !!! update the state because React may not reference the most up-to-date version
	 * !!! of the state.
	 */

	state = {
		persons: [
			{ id: '1', name: 'Matt', age: 39 },
			{ id: '2', name: 'Nikki', age: 41 },
			{ id: '3', name: 'Sky', age: 2 },
			{ id: '4', name: 'Audrey', age: 70 },
		],
		otherState: 'some other value',
		showPersons: false,
		showCockpit: true,
		changeCounter: 0,
		authenticated: false,
	}

	static getDerivedStateFromProps(props, state) {
		console.log('[App.js] getDerivedStateFromProps', props)
		return state
	}

	//! IMPORTANT HOOK
	componentDidMount() {
		console.log('[App.js] componentDidMount')
	}

	//! IMPORTANT HOOK
	shouldComponentUpdate(nextProps, nextState) {
		console.log('[App.js] shouldComponentUpdate')
		return true
	}

	//! IMPORTANT HOOK
	componentDidUpdate() {
		console.log('[App.js componentDidUpdate')
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
		//! WRONG WAY TO UPDATE STATE BASED ON PREVIOUS STATE
		//* this.setState({
		//* 	persons: newPersons,
		//* 	changeCounter: this.state.changeCounter + 1,
		//* })

		//% CORRECT WAY TO UPDATE STATE BASED ON PREVIOUS STATE
		//% Using built-in function ability in setState() method
		//% The parameter 'prevState' can be named however you like, but
		//% the first parameter in the setState() method will reference
		//% the most-current state that React has rendered.

		this.setState((prevState, props) => {
			return {
				persons: newPersons,
				changeCounter: prevState.changeCounter + 1,
			}
		})
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

	loginHandler = () => {
		this.setState({ authenticated: true })
	}

	render() {
		console.log('[App.js] render')
		let buttonText = 'Show Names'

		let persons = null

		// Code to manage the 'Persons' array (list)
		if (this.state.showPersons) {
			persons = (
				<Persons
					persons={this.state.persons}
					clicked={this.deletePersonHandler}
					changed={this.nameChangedHandler}
					isAuthenticated={this.state.authenticated}
				/>
			)

			// Dynamically styling output if 'showPersons' is true
			buttonText = 'Hide Names'
		}

		return (
			<Auxiliary>
				<button
					onClick={() => {
						this.setState({ showCockpit: false })
					}}
				>
					Remove Cockpit
				</button>
				<AuthContext.Provider
					value={{
						authenticated: this.state.authenticated,
						login: this.loginHandler,
					}}
				>
					{this.state.showCockpit ? (
						<Cockpit
							title={this.props.appTitle}
							personsLength={this.state.persons.length}
							showPersons={this.state.showPersons}
							togglePersons={this.togglePersonsHandler}
							buttonText={buttonText}
							login={this.loginHandler}
						/>
					) : null}
					{persons}
				</AuthContext.Provider>
			</Auxiliary>
		)
	}
}

export default withClass(App, classes.App)
