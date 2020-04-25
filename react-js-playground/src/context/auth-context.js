import React from 'react'

//? React.createContext() is a built-in React method
//? Can export context value as array, object, string, number, etc
//? These React.context components must wrap other components that need
//? access to the props listed in the React.context file

const authContext = React.createContext({
	authenticated: false,
	login: () => {},
})

export default authContext
