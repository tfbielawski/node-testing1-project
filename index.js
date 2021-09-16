/**
 * [Exercise 1] trimProperties copies an object trimming its properties
 * @param {object} obj - an object with properties that are strings
 * @returns {object} - a copy of the object with strings trimmed
 *
 * EXAMPLE
 * trimProperties({ name: '  jane  ' }) // returns a new object { name: 'jane' }
 */
function trimProperties(obj) {
  //Declare empty object to hold result
  const result = {}
  //For each property in the obj
  for (let prop in obj){
    //Assign each trimmed value to result[prop] array, leaving original obj intact
    result[prop] =  obj[prop].trim()
  }
  //Return result, leaving object intact
  return result
}

/**
 * [Exercise 2] trimPropertiesMutation trims in place the properties of an object
 * @param {object} obj - an object with properties that are strings
 * @returns {object} - the same object with strings trimmed
 *
 * EXAMPLE
 * trimPropertiesMutation({ name: '  jane  ' }) // returns the object mutated in place { name: 'jane' }
 */
function trimPropertiesMutation(obj) {
  //For each property in the obj
  for (let prop in obj){
    //Assign each trimmed value to result[prop] array, leaving original obj intact
    obj[prop] =  obj[prop].trim()
  }
  //Return the mutated object
  return obj
}

/**
 * [Exercise 3] findLargestInteger finds the largest integer in an array of objects { integer: 1 }
 * @param {object[]} integers - an array of objects
 * @returns {number} - the largest integer
 *
 * EXAMPLE
 * findLargestInteger([{ integer: 1 }, { integer: 3 }, { integer: 2 }]) // returns 3
 */

//Define the findLargestInteger func, integers parameter
function findLargestInteger(integers) {
  //Declare result var to hold results
  let result = integers[0].integer
  for (let i = 1; i < integers.length; i++){
    //If current index of integers.integer, assign it to result
    if(integers[i].integer > result){ result = integers[i].integer }
  }
  //Return the result
  return result
}

class Counter {
  /**
   * [Exercise 4A] Counter creates a counter
   * @param {number} initialNumber - the initial state of the count
   */
  //Constructor with initialNumber parameter
  constructor(initialNumber) {
    //Declare and initialize count with initial num
    this.count = initialNumber
  }

  /**
   * [Exercise 4B] Counter.prototype.countDown counts down to zero
   * @returns {number} - the next count, does not go below zero
   *
   * EXAMPLE
   * const counter = new Counter(3)
   * counter.countDown() // returns 3
   * counter.countDown() // returns 2
   * counter.countDown() // returns 1
   * counter.countDown() // returns 0
   * counter.countDown() // returns 0
   */
  //CountDown method no parameters
  countDown() {
    //If less than 1, decrement and return
    // if (this.count > 0) { return this.count-- }
    // else{return this.count}
    return this.count > 0 ? this.count-- : 0
  }
}

class Seasons {
  /**
   * [Exercise 5A] Seasons creates a seasons object
   */
  constructor() {
    //Declare and initialize array of seasons
    this.seasons = ["summer",  "fall",  "winter",  "spring", ]
    //Initial state for current season, maps to position 0
    this.currentSeason = 0
  }

  /**
   * [Exercise 5B] Seasons.prototype.next returns the next season
   * @returns {string} - the next season starting with "summer"
   *
   * EXAMPLE
   * const seasons = new Seasons()
   * seasons.next() // returns "summer"
   * seasons.next() // returns "fall"
   * seasons.next() // returns "winter"
   * seasons.next() // returns "spring"
   * seasons.next() // returns "summer"
   */
  next() {
    //Assign the current season to result
    const result = this.seasons[this.currentSeason]
    //current season is 3, make it 0
    if(this.currentSeason === 3){ this.currentSeason = 0 }
    //otherwise increment the season
    else {++this.currentSeason}
    return result
  }
}

class Car {
  /**
   * [Exercise 6A] Car creates a car object
   * @param {string} name - the name of the car
   * @param {number} tankSize - capacity of the gas tank in gallons
   * @param {number} mpg - miles the car can drive per gallon of gas
   */
  constructor(name, tankSize, mpg) {
    this.odometer = 0 // car initializes with zero miles
    this.tank = tankSize // car initializes full of gas
    this.tankSize = tankSize
    this.mpg = mpg
  }

  /**
   * [Exercise 6B] Car.prototype.drive adds miles to the odometer and consumes fuel according to mpg
   * @param {string} distance - the distance we want the car to drive
   * @returns {number} - the updated odometer value
   *
   * EXAMPLE
   * const focus = new Car('focus', 20, 30)
   * focus.drive(100) // returns 100
   * focus.drive(100) // returns 200
   * focus.drive(100) // returns 300
   * focus.drive(200) // returns 500
   * focus.drive(200) // returns 600 (ran out of gas after 100 miles)
   */
  drive(distance) {
    const milesCanDrive = this.tank * this.mpg
    if (distance <= milesCanDrive){
      //Increment odometer
      this.odometer = this.odometer + distance
      //Decrement fuel
      this.tank = this.tank - (distance / this.mpg)
      return this.odometer
    }
    else{
      this.tank = 0
      this.odometer = this.odometer + milesCanDrive
    }
      return this.odometer
  }

  /**
   * [Exercise 6C] Adds gallons to the tank
   * @param {number} gallons - the gallons of fuel we want to put in the tank
   * @returns {number} - the miles that can be driven after refueling
   *
   * EXAMPLE
   * const focus = new Car('focus', 20, 30)
   * focus.drive(600) // returns 600
   * focus.drive(1) // returns 600 (no distance driven as tank is empty)
   * focus.refuel(99) // returns 600 (tank only holds 20)
   */
  refuel(gallons) {
    const fuelCap = this.tankSize - this.tank
    if(gallons <= fuelCap) {this.tank = this.tank + gallons}
    else{this.tank = this.tankSize}
    return this.tank * this.mpg
  }
}

/**
 * [Exercise 7] Asynchronously resolves whether a number is even
 * @param {number} number - the number to test for evenness
 * @returns {promise} - resolves true if number even, false otherwise
 *
 * EXAMPLE
 * isEvenNumberAsync(2).then(result => {
 *    // result is true
 * })
 * isEvenNumberAsync(3).then(result => {
 *    // result is false
 * })
 */
function isEvenNumberAsync(number) {
  if(number % 2 === 0){return Promise.resolve(true)}
  else {return Promise.resolve(false)}
}

module.exports = {
  trimProperties,
  trimPropertiesMutation,
  findLargestInteger,
  isEvenNumberAsync,
  Counter,
  Seasons,
  Car,
}
