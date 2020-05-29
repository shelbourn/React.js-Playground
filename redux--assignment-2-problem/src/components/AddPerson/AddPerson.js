import React, { Component } from 'react'
import './AddPerson.css'

/***
 * ? We can managed state locally here because it is only for
 * ? local UI changes and two-way binding for input fields
 */

class AddPerson extends Component {
	state = {
		name: '',
		age: null,
	}

	nameChangedHandler = (event) => {
		this.setState({ name: event.target.value })
	}

	ageChangedHandler = (event) => {
		this.setState({ age: event.target.vale })
	}

	/***
	 * ? Two-way binding is set up by having an onChange handler that handles the
	 * ? input event and updates the state, and then the value set to the equivalent state property
	 */

	render() {
		return (
			<div className="AddPerson">
				<input
					type="text"
					placeholder="Name"
					onChange={this.nameChangedHandler}
					value={this.state.name}
				/>
				<input
					type="number"
					placeholder="Age"
					onChange={this.ageChangedHandler}
					value={this.state.age}
				/>
				<button onClick={this.props.personAdded}>Add Person</button>
			</div>
		)
	}
}

export default AddPerson
