import { maxGifts } from './day14';
import { describe, it, expect } from 'vitest';

describe('Reto #14: Evita la alarma', () => {
  const testCases = [
    createTestCase([[1, 2, 3, 1]], 4),
    createTestCase([[2, 7, 9, 3, 1]], 12),
    createTestCase([[0, 0, 0, 0, 1]], 1),
  ];

  it('Type Test - should return a number', () => {
    expect(maxGifts([0, 0, 0, 0, 1])).toBeTypeOf('number');
  });

  it.each(testCases)(
    '#%# should return the minimum time each reindeer can take to slide down the pyramid using the most optimal path',
    ({ args, expected }) => {
      expect(maxGifts(...args)).toEqual(expected);
    },
  );
});
