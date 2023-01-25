import { countTime } from './day09';
import { describe, it, expect } from 'vitest';

describe('Reto #9: Las luces de Navidad', () => {
  const testCases = [
    createTestCase(
      [[0, 1, 1, 0, 1]],
      7,
      'should return 7 if all lights are turned on in the first change'
    ),
    createTestCase(
      [[0, 0, 0, 1]],
      21,
      'should return 21 if all lights are turned on in the third change'
    ),
    createTestCase(
      [[0, 0, 1, 0, 0]],
      28,
      'should return 28 if all lights are turned on in the fourth change.'
    ),
  ];

  it('Type Test - should return a number', () => {
    expect(countTime([])).toBeTypeOf('number');
  });

  it.each(testCases)('#%# $description', ({ args, expected }) => {
    expect(countTime(...args)).toEqual(expected);
  });
});
