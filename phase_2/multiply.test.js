const multiply = require('./multiply')

describe('multiply', () => {
  it('multiplies 2 by 3', () => {
    expect(multiply(2,3)).toBe(6);
  })
})