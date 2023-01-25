import { sortToys } from './day19';
import { describe, it, expect } from 'vitest';

describe('Reto #19: Ordenando los regalos', () => {
  const testCases = [
    createTestCase(
      [
        ['ball', 'doll', 'car', 'puzzle'],
        [2, 3, 1, 0],
      ],
      ['puzzle', 'car', 'ball', 'doll']
    ),
    createTestCase(
      [
        ['pc', 'xbox', 'ps4', 'switch', 'nintendo'],
        [3, 1, 0, 2, 4],
      ],
      ['ps4', 'xbox', 'switch', 'pc', 'nintendo']
    ),
    createTestCase(
      [
        ['pc', 'xbox', 'ps4', 'switch', 'nintendo'],
        [8, 6, 5, 7, 9],
      ],
      ['ps4', 'xbox', 'switch', 'pc', 'nintendo']
    ),
  ];

  it('Type Test - should return an array', () => {
    expect(sortToys([], [])).toBeInstanceOf(Array);
  });

  it.each(testCases)(
    '#%# should return an array where each toy is in the position that corresponds to it',
    ({ args, expected }) => {
      expect(sortToys(...args)).toEqual(expected);
    }
  );
});
