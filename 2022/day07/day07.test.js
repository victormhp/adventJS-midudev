import { getGiftsToRefill } from './day07';
import { describe, it, expect } from 'vitest';

describe('Reto #7: Haciendo inventario de regalos', () => {
  const testCases = [
    createTestCase([[], [], []], [], 'should return an empty array if no gifts are given'),
    createTestCase(
      [
        ['a', 'a'],
        ['a', 'a'],
        ['a', 'a'],
      ],
      [],
      'should return an empty array if all gifts are in all arrays'
    ),
    createTestCase(
      [
        ['a', 'b'],
        ['c', 'd'],
        ['e', 'f'],
      ],
      ['a', 'b', 'c', 'd', 'e', 'f'],
      'should return all gifts if none of them are at least in two arrays'
    ),
  ];

  it('Type Test - should return an array', () => {
    expect(getGiftsToRefill([], [], [])).toBeInstanceOf(Array);
  });

  it.each(testCases)('#%# $description', ({ args, expected }) => {
    expect(getGiftsToRefill(...args)).toEqual(expected);
  });
});
