import { getMaxGifts } from './day05';
import { describe, it, expect } from 'vitest';

describe('Reto #5: Optimizando viajes de Santa', () => {
  const testCases = [
    createTestCase(
      [[12, 3, 11, 5, 7], 20, 3],
      20,
      'should return 20 when the highest number of gifts that can be distributed among 3 cities is 20: [12, 3, 5]'
    ),
    createTestCase(
      [[50], 15, 1],
      0,
      'should return 0 if it is not possible to find a trip that meets the specified requirements'
    ),
    createTestCase(
      [[50], 100, 1],
      50,
      'should return 50 when the highest number of gifts that can be distributed among 1 city is 100: [50]'
    ),
    createTestCase(
      [[50, 70], 100, 1],
      70,
      'should return 70 when the highest number of gifts that can be distributed among 2 cities is 100: [70]'
    ),
  ];

  it('Type Test - should return a number', () => {
    expect(getMaxGifts([], 0, 0)).toBeTypeOf('number');
  });

  it.each(testCases)('#%# $description', ({ args, expected }) => {
    expect(getMaxGifts(...args)).toEqual(expected);
  });
});
