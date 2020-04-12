/*****
 * EXPORTS & IMPORTS - ES6
 */

 // person.js
 const person = {
   name: 'Matt'
 }

 export default person

 // 'default' sets the default object to export from the file
 // In this case is would be the person const

 // utility.js
 export const clean = () => {...}

 export const baseData = 10

 // app.js
import person from './person.js'
import prs from './person.js'

import {baseData} from './utility.js'
import {clean} from './utility.js'

// or

import {baseData, clean} from './utility,js'