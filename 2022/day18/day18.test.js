import { dryNumber } from './day18';
import { describe, it, expect } from 'vitest';

describe('Reto #18: ¡Nos quedamos sin tinta!', () => {
  const testCases = [
    createTestCase([1, 15], [1, 10, 11, 12, 13, 14, 15]),
    createTestCase([2, 20], [2, 12, 20]),
    createTestCase([3, 33], [3, 13, 23, 30, 31, 32, 33]),
  ];

  it('Type Test - should return an array', () => {
    expect(dryNumber(1, 15)).toBeInstanceOf(Array);
  });

  it.each(testCases)(
    '#%# should return an array of numbers in the range $args.0-$args.1 that do not include the number $args.0',
    ({ args, expected }) => {
      expect(dryNumber(...args)).toEqual(expected);
    }
  );
});
