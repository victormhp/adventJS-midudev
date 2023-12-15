import { findFirstRepeated } from './day01';
import { describe, it, expect } from 'vitest';

describe('Reto #1: Primer regalo repetido', () => {
  const testCases = [
    createTestCase([[2, 1, 3, 5, 3, 2]], 3, 'should return 3'),
    createTestCase([[2, 4, 3, 5, 1]], -1, 'should return -1'),
  ];

  it('Type Test - should return a number', () => {
    expect(findFirstRepeated([2, 4, 3, 5, 1])).toBeTypeOf('number');
  });

  it.each(testCases)('#%# $description', ({ args, expected }) => {
    expect(findFirstRepeated(...args)).toEqual(expected);
  });
});
