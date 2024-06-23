import { optimizeIntervals } from './day17';
import { describe, it, expect } from 'vitest';

describe('Reto #17: Optimizando el alquiler', () => {
  const testCases = [
    createTestCase(
      [
        [
          [2, 7],
          [3, 4],
          [5, 8],
        ],
      ],
      [[2, 8]],
    ),
    createTestCase(
      [
        [
          [5, 7],
          [6, 8],
        ],
      ],
      [[5, 8]],
    ),
    createTestCase(
      [
        [
          [1, 15],
          [8, 12],
          [4, 7],
        ],
      ],
      [[1, 15]],
    ),
  ];

  it('Type Test - should return an array', () => {
    expect(
      optimizeIntervals([
        [1, 15],
        [8, 12],
        [4, 7],
      ]),
    ).toBeInstanceOf(Array);
  });

  it.each(testCases)(
    '#%# should return an array with the names of the gifts in each bag',
    ({ args, expected }) => {
      expect(optimizeIntervals(...args)).toEqual(expected);
    },
  );
});
