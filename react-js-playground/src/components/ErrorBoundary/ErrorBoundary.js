import React, { Component } from 'react'

//! Only wrap elements with <ErrorBoundary> when you think that code
//! May fail and you can't control it. DON'! WRAP ALL CODE IN <ErrorBoundary>
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
			// returning props.children returns all the normal code within the <div>
			// because all other elements are 'children' of the <ErrorBoundary> element
			return this.props.children
		}
	}
}
export default ErrorBoundary
