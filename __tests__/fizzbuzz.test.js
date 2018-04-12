// Require the `fizzbuzz` function into the unit test.
const fizzbuzz = require('../src/fizzbuzz');
/* globals describe it expect */

describe('fizzbuzz', () => {
  it('should have 2 when two passed', () => {
    expect(fizzbuzz.fizzbuzz(2)).toBe(2);
  });

  it('should have "fizz" when three passed', () => {
    expect(fizzbuzz.fizzbuzz(3)).toBe('fizz');
  });

  it('should have "buzz" when five passed', () => {
    expect(fizzbuzz.fizzbuzz(5)).toBe('buzz');
  });

  it('should have "fizz" when six passed', () => {
    expect(fizzbuzz.fizzbuzz(6)).toBe('fizz');
  });

  it('should have 11 when eleven passed', () => {
    expect(fizzbuzz.fizzbuzz(11)).toBe(11);
  });

  it('should have "fizzbuzz" when multiple of three and five passed', () => {
    expect(fizzbuzz.fizzbuzz(30)).toBe('fizzbuzz');
  });
});
