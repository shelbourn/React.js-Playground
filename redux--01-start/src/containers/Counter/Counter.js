import React, { Component } from 'react'
import { connect } from 'react-redux'
import CounterControl from '../../components/CounterControl/CounterControl'
import CounterOutput from '../../components/CounterOutput/CounterOutput'

/*********
 * * With Redux, React Containers still manage state and pass it down
 * * to child components. But they do not have their own state class.
 * * Instead, the subscribe to Redux subscriptions and receive state updates
 * * through Redux actions
 */

class Counter extends Component {
	state = {
		counter: 0,
	}

	counterChangedHandler = (action, value) => {
		switch (action) {
			case 'inc':
				this.setState((prevState) => {
					return { counter: prevState.counter + 1 }
				})
				break
			case 'dec':
				this.setState((prevState) => {
					return { counter: prevState.counter - 1 }
				})
				break
			case 'add':
				this.setState((prevState) => {
					return { counter: prevState.counter + value }
				})
				break
			case 'sub':
				this.setState((prevState) => {
					return { counter: prevState.counter - value }
				})
				break
		}
	}

	render() {
		return (
			<div>
				<CounterOutput value={this.props.ctr} />
				<CounterControl
					label="Increment"
					clicked={this.props.onIncrementCounter}
				/>
				<CounterControl
					label="Decrement"
					clicked={this.props.onDecrementCounter}
				/>
				<CounterControl label="Add" clicked={this.props.onAddCounter} />
				<CounterControl
					label="Subtract"
					clicked={this.props.onSubtractCounter}
				/>
				<hr />
				<button onClick={this.props.onStoreResult}>Store Result</button>
				<ul>
					{this.props.storedResults.map((strResult) => (
						<li
							key={strResult.id}
							// Passing this as an anonymous functions allows us to pass along data
							// when dispatching from UI interactions
							onClick={() => this.props.onDeleteResult(strResult.id)}
						>
							{strResult.value}
						</li>
					))}
				</ul>
			</div>
		)
	}
}

//* Mapping Redux state to React props
//* state in this func is provided by Redux
//* ctr can be named anything, but it is a React prop and refers to
//* the counter property in state
const mapStateToProps = (state) => {
	return {
		ctr: state.counter,
		storedResults: state.results,
	}
}

/***
 * * connect lets us access store also and we can create
 * * a function to interact with it.
 * * onIncrementCounter is a React prop
 * * onIncrementCounter calls an anonymous function that returns a call
 * * to the dispatch() function
 *
 * ? Can pass additional object properties along with the action to the reducer
 * ? In this case we use {type: REQUIRED, payload: {ourObject: ...}}
 */
const mapDispatchToProps = (dispatch) => {
	return {
		onIncrementCounter: () => dispatch({ type: 'INCREMENT' }),
		onDecrementCounter: () => dispatch({ type: 'DECREMENT' }),
		onAddCounter: () => dispatch({ type: 'ADD', payload: { value: 10 } }),
		onSubtractCounter: () =>
			dispatch({ type: 'SUBTRACT', payload: { value: 15 } }),
		onStoreResult: () => dispatch({ type: 'STORE_RESULT' }),
		onDeleteResult: (id) =>
			dispatch({ type: 'DELETE_RESULT', payload: { resultElementID: id } }),
	}
}

//* connect is a Redux function that returns a function that returns a HOC
//* Can pass null as first argument to connect function if you only want to pass actions
export default connect(mapStateToProps, mapDispatchToProps)(Counter)
// export default Counter
