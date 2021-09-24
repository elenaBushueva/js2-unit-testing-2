const expect = require('chai').expect;
const sum = require('../index');

it('should calculate sum of positives', () => {
    expect(sum(10, 1)).eq(11)
})

it('should calculate sum of negatives', () => {
    expect(sum(-10, -11)).eq(-21)
})

it('should calculate sum of zeroes', () => {
    expect(sum(0, 0)).eq(0)
})

it('should compare arrays', () => {
    expect([1, 2, 3]).eql([1, 2, 3])
})




