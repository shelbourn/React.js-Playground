/*****
 * EXPORTS & IMPORTS - ES6
 */

 // person.js - default exports
 const person = {
   name: 'Matt'
 }

 export default person

 // 'default' sets the default object to export from the file
 // In this case is would be the person const

 // utility.js - Named Exports
 export const clean = () => {...}

 export const baseData = 10

 // app.js
import person from './person.js'
import prs from './person.js' // Doesn't have to match variable's name because it will import the default object

import {baseData} from './utility.js' // Must use {}
import {clean} from './utility.js'

// or...
import {baseData, clean} from './utility,js'

// can import with aliases
import {baseData as bData, clean as cln} from './utility.js'

// batch import with aliases
import * as bundledData from './utility.js'

// If using bundledData, accessed by...
bundledData.clean
bundledData.baseData

/*****
 * Classes
 */

 // Classes are blueprints for objects
 // Include properties and methods

 class Person { // Note: class name is Capitalized
   name = 'Matt' // Property
   call = () => {...} // Method
 }