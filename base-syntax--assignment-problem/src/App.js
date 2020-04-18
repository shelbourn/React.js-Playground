import React, { Component } from 'react'
import './App.css'
import UserOutput from './UserOutput/UserOutput'
import UserInput from './UserInput/UserInput'

class App extends Component {
	state = {
		userNames: [{ name: 'Matt' }, { name: 'Mike' }, { name: 'Andy' }],
	}

	nameChangeHandler = (event) => {
		this.setState({
			userNames: [
				{ name: event.target.value },
				{ name: 'Mike' },
				{ name: 'Andy' },
			],
		})
	}

	render() {
		return (
			<div className="App">
				<UserOutput userName={this.state.userNames[1].name} />
				<UserOutput userName={this.state.userNames[2].name} />
				<UserOutput userName={this.state.userNames[0].name} />
				<UserInput
					userName={this.state.userNames[0].name}
					changedName={this.nameChangeHandler}
				/>
			</div>
		)
	}
}

export default App
