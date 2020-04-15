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
 * Classes, Properties, & Methods (ES6 Syntax)
 */

 // Classes are blueprints for objects
 // Include properties and methods
 // Properties are like variables attached to Classes/Objects
 // Methods are like functions attached to Classes/Objects

 class Person1 { // Note: class name is Capitalized
   name = 'Matt' // Property
   call = () => {...} // Method
 }

 // Classes are instatiated using 'new' keyword
const myPerson = new Person1()
myPerson.call()
console.log(myPerson.name)

// Class Example
class Human { // Human inherits all properties/methods from Person
  constructor(){ // Constructor
    this.gender = 'male'
  }

  printGender() {
    console.log(this.gender)
  }
}

// Class Inheritance
class Person extends Human {
  super() // Must be included to access methods in inherited class
  constructor() {
    this.name = 'Matt'
  }

  printMyName() {
    console.log(this.name)
  }
}

const person = new Person()
person.printMyName()
person.printGender() // printGender() is accessible through inheritance

/*****
 * Classes, Properties & Methods (ES7 Syntax)
 */

// Instead of using myMethods(){...} to add a method (eliminates having to use this.myProperty)
myMethod = () => {...}

// Instead of using a constructor() to add a property
// constructor() { this.myProperty = 'value }
// Eliminates having to use this.myMethod()
myProperty = 'value'

class Human {
  gender = 'Male'

  printGender = () => {
    console.log(this.gender) // Still need this. when accessing properties within a method
  }
}