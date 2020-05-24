import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import './index.css'
import App from './App'
import registerServiceWorker from './registerServiceWorker'
import reduxReducer from '../store/reducer'

//* Creating Redux store and implementing reducer
const reduxStore = createStore(reduxReducer)

ReactDOM.render(<App />, document.getElementById('root'))
registerServiceWorker()
