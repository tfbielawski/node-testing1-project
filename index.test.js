const utils = require('./index')
const {isEvenNumberAsync} = require("./index");


describe('[Exercise 1] trimProperties', () => {
  test('[1] returns an object with the properties trimmed', () => {
    // EXAMPLE
    const input = { foo: '  foo ', bar: 'bar ', baz: ' baz' }
    const expected = { foo: 'foo', bar: 'bar', baz: 'baz' }
    const actual = utils.trimProperties(input)
    expect(actual).toEqual(expected)
  })
  test('[2] returns a copy, leaving the original object intact', () => {
    //Declare and init input object
    const input = { foo: '  foo ', bar: 'bar ', baz: ' baz' }
    //Call the func, arg: input
    utils.trimProperties(input)
    //Expect input to be the object declared above, unchanged
    expect(input).toEqual({ foo: '  foo ', bar: 'bar ', baz: ' baz' })
  })
})

describe('[Exercise 2] trimPropertiesMutation', () => {
  test('[3] returns an object with the properties trimmed', () => {
    //Declare and init input object
    const input = { foo: '  foo ', bar: 'bar ', baz: ' baz' }
    //Declare expected object
    const expected = { foo: 'foo', bar: 'bar', baz: 'baz' }
    //call trimProperties() arg: input
    const actual = utils.trimProperties(input)
    //Expect actual to equal expected
    expect(actual).toEqual(expected)
  })

  test('[4] the object returned is the exact same one we passed in', () => {
    //Declare input object
    const input = { foo: '  foo ', bar: 'bar ', baz: ' baz' }
    //call trimProperties() arg: input
    const actual = utils. trimPropertiesMutation(input)
    //Expect actual to be the same as input
    expect(actual).toBe(input)
  })
})

describe('[Exercise 3] findLargestInteger', () => {
  test('[5] returns the largest number in an array of objects { integer: 2 }', () => {
    //Declare and init input object
    const input = ([{ integer: 1 }, { integer: 3 }, { integer: 2 }])
    const input2 = ([{ integer: 4 }, { integer: 3 }, { integer: 2 }])
    const input3= ([{ integer: 1 }, { integer: 3 }, { integer: 4 }])
    //Call findLargestInteger arg: input
    const actual = utils.findLargestInteger(input)
    const actual2 = utils.findLargestInteger(input2)
    const actual3 = utils.findLargestInteger(input3)
    //expect actual to be highest value
    expect(actual).toBe(3)
    expect(actual2).toBe(4)
    expect(actual3).toBe(4)
  })
})

describe('[Exercise 4] Counter', () => {
  //Declare counter variable
  let counter
  beforeEach(() => {
    //Tests should not rely on state from previous test
    //Instantiate a new counter each time
    counter = new utils.Counter(3)
  })

  test('[6] the FIRST CALL of counter.countDown returns the initial count', () => {
    //Expect
    expect(counter.countDown()).toBe(3)
  })
  test('[7] the SECOND CALL of counter.countDown returns the initial count minus one', () => {
    //Call the function again
    counter.countDown()
    //Expect 2
    expect(counter.countDown()).toBe(2)
  })
  test('[8] the count eventually reaches zero but does not go below zero', () => {
    //Call the function
    counter.countDown()
    counter.countDown()
    counter.countDown()
    counter.countDown()
    //Expect the counter now reaches 0
    expect(counter.countDown()).toBe(0)
  })
})

describe('[Exercise 5] Seasons', () => {
  let seasons
  beforeEach(() => {
    //Instantiate a new seasons object with Seasons constructor
    seasons = new utils.Seasons() // each test must start with fresh seasons
  })
  test('[9] the FIRST call of seasons.next returns "summer"', () => {
    //Expect summer
    expect(seasons.next()).toBe("summer")
  })
  test('[10] the SECOND call of seasons.next returns "fall"', () => {
    //Call twice: summer, fall
    seasons.next()
    //Expect fall
    expect(seasons.next()).toBe("fall")
  })
  test('[11] the THIRD call of seasons.next returns "winter"', () => {
    //Call for each season:
    seasons.next()
    seasons.next()
    //Expect winter
    expect(seasons.next()).toBe("winter")
  })
  test('[12] the FOURTH call of seasons.next returns "spring"', () => {
    //Call for each season:
    seasons.next()
    seasons.next()
    seasons.next()
    //Expect spring
    expect(seasons.next()).toBe("spring")
  })
  test('[13] the FIFTH call of seasons.next returns again "summer"', () => {
    //Call for each season:
    seasons.next()
    seasons.next()
    seasons.next()
    seasons.next()
    //Expect summer
    expect(seasons.next()).toBe("summer")
  })
  test('[14] the 40th call of seasons.next returns "spring"', () => {
    //For loop to test multiple iterations
    for (let i = 0; i < 39; i++ ) {
      //Call seasons with each iteration of the loop
      seasons.next()
    }
    expect(seasons.next()).toBe("spring")
  })
})

describe('[Exercise 6] Car', () => {
  //Declare a variable for the car
  let mustang
  beforeEach(() => {
    //Assign properties to mustang

    mustang = new utils.Car('mustang', 20, 30) // each test must start with a fresh car
  })
  test('[15] driving the car returns the updated odometer', () => {
    //Expect starting mileage to increment to updated mileage
    expect(mustang.drive(100)).toBe(100)
    expect(mustang.drive(100)).toBe(200)
    expect(mustang.drive(100)).toBe(300)
    expect(mustang.drive(200)).toBe(500)
  })
  test('[16] driving the car uses gas', () => {
    //The car drives and empties the tank
    mustang.drive(600)
    expect(mustang.drive(1)).toBe(600)
    expect(mustang.drive(1)).toBe(600)
    expect(mustang.drive(1)).toBe(600)
    expect(mustang.tank).toBe(0)

  })
  test('[17] refueling allows to keep driving', () => {
    mustang.drive(600)
    mustang.refuel(10)
    mustang.drive(600)
    expect(mustang.odometer).toBe(900)
    mustang.refuel(20)
    mustang.drive(600)
    expect(mustang.odometer).toBe(1500)
  })
  test('[18] adding fuel to a full tank has no effect', () => {
    mustang.refuel(200000);
    mustang.drive(10000)
    expect(mustang.odometer).toBe(600)

  })
})

describe('[Exercise 7] isEvenNumberAsync', () => {
  test('[19] resolves true if passed an even number', async () => {
    const result = await utils.isEvenNumberAsync(2)
    expect(result).toBe(true)
  })
  test('[20] resolves false if passed an odd number', async () => {
    const result = await utils.isEvenNumberAsync(3)
    expect(result).toBe(false)
  })
})


