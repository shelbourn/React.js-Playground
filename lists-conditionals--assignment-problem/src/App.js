import React, { Component } from 'react'
import './App.css'
import Validation from './Validation/Validation'
import Char from './Char/Char'

class App extends Component {
	state = {
		userInput: '',
	}

	inputChangeHandler = (event) => {
		this.setState({ userInput: event.target.value })
	}

	deleteCharHandler = (index) => {
		const text = this.state.userInput.split('')
		text.splice(index, 1)
		const updatedText = text.join('')
		this.setState({ userInput: updatedText })
	}

	render() {
		const characters = this.state.userInput.split('').map((ch, index) => {
			return (
				<Char
					character={ch}
					key={index}
					clicked={() => this.deleteCharHandler(index)}
				/>
			)
		})

		const style = {
			color: 'steelBlue',
			textDecoration: 'underline',
		}

		return (
			<div className="App">
				<h4 style={style}>Enter Some Text Below:</h4>
				<input
					type="text"
					onChange={this.inputChangeHandler}
					value={this.state.userInput}
				/>
				<h4 style={style}>Your Entered Text:</h4>
				<p>{this.state.userInput}</p>
				<h4 style={style}>Text Input Length Validation</h4>
				<Validation inputLength={this.state.userInput.length} />
				<h4 style={style}>Text-to-Tile Output</h4>
				{characters}
				<h5>Click on Any Tile to Delete It!</h5>
			</div>
		)
	}
}

export default App
