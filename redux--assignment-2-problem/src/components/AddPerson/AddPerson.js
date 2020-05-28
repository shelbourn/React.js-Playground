import React {Component} from 'react'

import './AddPerson.css'
import { Component } from 'react'

class AddPerson extends Component {
  render() {
    return (
	<div className="AddPerson">
		<input type="text" placeholder="Name" />
		<input type="number" placeholder="Age" />
		<button onClick={this.props.personAdded}>Add Person</button>
	</div>
    )
  }
}

export default addPerson
