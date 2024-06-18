import { calculateTime } from './day13';
import { describe, it, expect } from 'vitest';

describe('Reto #13: Calculando el Tiempo', () => {
  const testCases = [
    createTestCase([['00:10:00', '01:00:00', '03:30:00']], '-02:20:00'),
    createTestCase([['02:00:00', '05:00:00', '00:30:00']], '00:30:00'),
    createTestCase([['00:45:00', '00:45:00', '00:00:30', '00:00:30']], '-05:29:00'),
  ];

  it('Type Test - should return a string', () => {
    expect(calculateTime(['00:10:00', '01:00:00', '03:30:00'])).toBeTypeOf('string');
  });

  it.each(testCases)('#%# $description', ({ args, expected }) => {
    expect(calculateTime(...args)).toEqual(expected);
  });
});
