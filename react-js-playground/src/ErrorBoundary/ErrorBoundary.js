import React, { Component } from 'react'

//! Only wrap elements with <ErrorBoundary> when you think that code
//! May fail. DON'! WRAP ALL CODE IN <ErrorBoundary>
class ErrorBoundary extends Component {
	state = {
		hasError: false,
		errorMessage: '',
	}

	componentDidCatch = (error, info) => {
		this.setState({ hasError: true, errorMessage: error })
	}

	render() {
		if (this.state.hasError) {
			return <h1>{this.state.errorMessage}</h1>
		} else {
			return this.props.children
		}
	}
}
export default ErrorBoundary
