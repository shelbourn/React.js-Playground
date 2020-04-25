//? HOC (higher order components) wrap other components
//? Aux component is a HOC that only returns the children props within it's scope
//? The Aux component itself isn't doing anything besides providing a
//? way to multiple adjacent JSX elements in React
//? This has to be this way because Javascript can only return one expression

//? props.children is baked into React and returns all JSX that is a child
//? to the main wrapping element

//* You can remove the 'import React...' statement because there is not JSX
//* being returned here so React.createElement() is not being used

const aux = (props) => props.children

export default aux
