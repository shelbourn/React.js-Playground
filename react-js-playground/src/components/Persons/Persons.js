import React, { PureComponent } from 'react'
import Person from './Person/Person'

//* PureComponent is a component that acts like a normal component
//* but has a built-in shouldComponentUpdate that checks if any props
//* have changed or not.
class Persons extends PureComponent {
	// static getDerivedStateFromProps(props, state) {
	// 	console.log('[Persons.js] getDerivedStateFromProps')
	// 	return state
	// }

	// Adding the if-else statement to this hook will make it so that
	// the app re-renders ONLY if persons changes.
	// shouldComponentUpdate(nextProps, nextState) {
	// 	console.log('[Persons.js] shouldComponentUpdate')
	// 	if (
	// 		nextProps.persons !== this.props.persons ||
	// 		nextProps.changed !== this.props.changed ||
	// 		nextProps.clicked !== this.props.clicked
	// 	) {
	// 		return true
	// 	}
	// 	return false
	// }

	getSnapshotBeforeUpdate(prevProps, prevState) {
		console.log('[Persons.js] getSnapshotBeforeUpdate')
		return { message: 'Snapshot!' }
	}

	componentDidUpdate(prevProps, prevState, snapshot) {
		console.log('[Persons.js] componentDidUpdate')
		console.log(snapshot)
	}

	// Performs cleanup work
	componentWillUnmount() {
		console.log('[Persons.js] componentDidUnmount')
	}

	render() {
		console.log('[Persons.js] rendering...')
		return this.props.persons.map((person, index) => {
			return (
				<Person
					key={person.id}
					click={() => this.props.clicked(index)}
					name={person.name}
					age={person.age}
					changed={(event) => this.props.changed(event, person.id)}
				/>
			)
		})
	}
}

export default Persons
