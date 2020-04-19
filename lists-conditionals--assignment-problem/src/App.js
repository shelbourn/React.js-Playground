import React, { Component } from 'react'
import './App.css'
import InputValidation from './InputValidation/InputValidation'
import CharOutput from './CharOutput/CharOutput'

class App extends Component {
	state = {
		userInput: '',
	}

	// Handler to output string input length
	inputChangeHandler = (event) => {
		return this.setState({ userInput: event.target.value })
	}

	deleteCharHandler = (index) => {
		const text = this.state.userInput.split('')
		text.splice(index, 1)
		const updatedText = text.join('')
		this.setState({ userInput: updatedText })
	}

	render() {
		const characters = this.state.userInput.split('').map((char, index) => {
			return (
				<CharOutput
					character={char}
					key={index}
					clicked={() => {
						this.deleteCharHandler(index)
					}}
				/>
			)
		})

		return (
			<div className="App">
				<input
					type="text"
					onChange={this.inputChangeHandler}
					value={this.state.userInput}
				/>
				<p>{this.state.userInput}</p>
				<InputValidation inputLength={this.state.userInput.length} />
				{characters}
			</div>
		)
	}
}

export default App
