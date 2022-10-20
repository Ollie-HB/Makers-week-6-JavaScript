const add = require('./add')

describe('add', () => {
  it ('adds 2 and 2', () => {
    expect(add(2,2)).toBe(4);
  });
});

describe('add', () => {
  it ('adds different numbers', () => {
    expect(add(21,12)).toBe(33);
  });
});