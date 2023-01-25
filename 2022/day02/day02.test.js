import { countHours } from './day02';
import { describe, it, expect } from 'vitest';

describe('Reto #2: Nadie quiere hacer horas extras', () => {
  const testCases = [
    createTestCase([2023, ['01/06', '04/01', '12/25']], 4, 'should return 4 extra hours'),
    createTestCase([2022, ['01/06', '04/01', '12/25']], 4, 'should return 4 extra hours'),
    createTestCase(
      [1985, ['01/01', '01/06', '02/02', '02/17', '02/28', '06/03', '12/06', '12/25']],
      10,
      'should return 10 extra hours'
    ),
    createTestCase([2000, ['01/01']], 0, 'should return 0 extra hours'),
  ];

  it('Type Test - should return a number', () => {
    expect(countHours(2022, ['01/06', '04/01', '12/25'])).toBeTypeOf('number');
  });

  it.each(testCases)('#%# $description', ({ args, expected }) => {
    expect(countHours(...args)).toEqual(expected);
  });
});
