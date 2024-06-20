import { autonomousDrive } from './day15';
import { describe, it, expect } from 'vitest';

describe('Reto #15: Robot autónomo', () => {
  const testCases = [
    createTestCase([['..!....'], ['R', 'L']], ['..!....']),
    createTestCase(
      [
        ['!..', '***'],
        ['R', 'L'],
      ],
      ['!..', '***'],
    ),
    createTestCase(
      [
        ['..!....', '......*'],
        ['R', 'D', 'L'],
      ],
      ['.......', '..!...*'],
    ),
  ];

  it('Type Test - should return an array', () => {
    expect(autonomousDrive(['!..', '***'], ['R', 'L'])).toBeInstanceOf(Array);
  });

  it.each(testCases)(
    '#%# should return an array with the current position of the robot',
    ({ args, expected }) => {
      expect(autonomousDrive(...args)).toEqual(expected);
    },
  );
});
