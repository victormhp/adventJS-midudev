import { getOptimalPath } from './day14';
import { describe, it, expect } from 'vitest';

describe('Reto #14: El mejor camino', () => {
  const testCases = [
    createTestCase([[[0], [2, 3]]], 2),
    createTestCase([[[0], [3, 4], [9, 8, 1]]], 5),
    createTestCase([[[1], [1, 5], [7, 5, 8], [9, 4, 1, 3]]], 8),
  ];

  it('Type Test - should return a number', () => {
    expect(getOptimalPath([[0], [2, 3]])).toBeTypeOf('number');
  });

  it.each(testCases)(
    '#%# should return the minimum time each reindeer can take to slide down the pyramid using the most optimal path',
    ({ args, expected }) => {
      expect(getOptimalPath(...args)).toEqual(expected);
    }
  );
});
