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
					clicked={() => this.counterChangedHandler('inc')}
				/>
				<CounterControl
					label="Decrement"
					clicked={() => this.counterChangedHandler('dec')}
				/>
				<CounterControl
					label="Add 5"
					clicked={() => this.counterChangedHandler('add', 5)}
				/>
				<CounterControl
					label="Subtract 5"
					clicked={() => this.counterChangedHandler('sub', 5)}
				/>
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
	}
}

//* connect is a Redux function that returns a function that returns a HOC
export default connect(mapStateToProps)(Counter)
// export default Counter
