import React, { Component } from 'react'

//? Async components load asynchronously (when needed)

//* importComponent will be a function reference

const asyncComponent = (importComponent) => {
	return class extends Component {
		state = {
			component: null,
		}

//% cmp.default is the default truthy/falsiness for the component
//% which will most-likely always be true for normal components
		componentDidMount() {
			importComponent().then((cmp) => {
				this.setState({ component: cmp.default })
			})
		}

		render() {
			const C = this.state.component

      //* spread passes any props to the copied component
			return C ? <C {...this.props} /> : null
		}
	}
}

export default asyncComponent
