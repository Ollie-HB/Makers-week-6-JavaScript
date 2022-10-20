const fizzbuzz = require('./fizzbuzz')

describe('fizzbuzz', () => {
  it('receives 3 and returns Fizz', () => {
    expect(fizzbuzz(3)).toBe('Fizz');
  })
})

describe('fizzbuzz', () => {
  it('receives 5 and returns Buzz', () => {
    expect(fizzbuzz(5)).toBe('Buzz');
  })
})

describe('fizzbuzz', () => {
  it('receives 8 and returns 8', () => {
    expect(fizzbuzz(8)).toBe(8);
  })
})

describe('fizzbuzz', () => {
  it('receives 15 and returns FizzBuzz', () => {
    expect(fizzbuzz(15)).toBe('FizzBuzz');
  })
})

describe('fizzbuzz', () => {
  it('receives 18 and returns Fizz', () => {
    expect(fizzbuzz(18)).toBe('Fizz');
  })
})

describe('fizzbuzz', () => {
  it('receives 20 and returns Buzz', () => {
    expect(fizzbuzz(20)).toBe('Buzz');
  })
})