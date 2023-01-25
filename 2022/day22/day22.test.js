import { checkStepNumbers } from './day22';
import { describe, it, expect } from 'vitest';

describe('Reto #22: La iluminación en sintonía', () => {
  const testCases = [
    createTestCase(
      [
        ['tree_1', 'tree_2', 'house', 'tree_1', 'tree_2', 'house'],
        [1, 33, 10, 2, 44, 20],
      ],
      true,
      'should return true if the steps of each system are in strictly increasing order'
    ),
    createTestCase(
      [
        ['tree_1', 'tree_1', 'house'],
        [2, 1, 10],
      ],
      false,
      'should return false if the steps of each system are not in strictly increasing order'
    ),
    createTestCase(
      [
        ['tree_1', 'tree_1', 'house'],
        [1, 2, 10],
      ],
      true,
      'should return true if the steps of each system are in strictly increasing order'
    ),
  ];

  it('Type Test - should return a boolean', () => {
    expect(checkStepNumbers(['tree_1', 'tree_1', 'house'], [2, 1, 10])).toBeTypeOf('boolean');
  });

  it.each(testCases)('#%# $description', ({ args, expected }) => {
    expect(checkStepNumbers(...args)).toEqual(expected);
  });
});
