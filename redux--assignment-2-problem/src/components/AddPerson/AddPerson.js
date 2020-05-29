import React, { Component } from 'react'
import './AddPerson.css'

/***
 * ? We can managed state locally here because it is only for
 * ? local UI changes and two-way binding for input fields
 */

class AddPerson extends Component {
	state = {
		name: '',
		age: '',
	}

	nameChangedHandler = (event) => {
		this.setState({ name: event.target.value })
	}

	ageChangedHandler = (event) => {
		this.setState({ age: event.target.value })
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
				{/* Once the button is clicked then the name & age properties should
        be stored in global state with Redux */}
				<button
					onClick={() =>
						this.props.personAdded(this.state.name, this.state.age)
					}
				>
					Add Person
				</button>
			</div>
		)
	}
}

export default AddPerson
