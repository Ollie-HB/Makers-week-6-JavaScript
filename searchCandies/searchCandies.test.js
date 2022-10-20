const searchCandies = require('./searchCandies')

describe('searchCandies', () => {
  it('searches Ma, 10, returns candies beginning with Ma and less than 10', () => {
    expect(searchCandies('Ma',10)).toEqual([ 'Mars', 'Maltesers' ]);
  })
})

describe('searchCandies', () => {
  it('searches Ma, 2, returns candies beginning with Ma and less than 2', () => {
    expect(searchCandies('Ma',2)).toEqual([ 'Mars' ]);
  })
})

describe('searchCandies', () => {
  it('searches S, 10, returns candies beginning with S and less than 10', () => {
    expect(searchCandies('S',10)).toEqual([ 'Skitties', 'Skittles', 'Starburst' ]);
  })
})

describe('searchCandies', () => {
  it('searches S, 4, returns candies beginning with S and less than 4', () => {
    expect(searchCandies('S',4)).toEqual([ 'Skitties', 'Skittles' ]);
  })
})

describe('searchCandies', () => {
  it('searches ma, 10, returns candies beginning with Ma and less than 10', () => {
    expect(searchCandies('ma',10)).toEqual([ 'Mars', 'Maltesers' ]);
  })
})