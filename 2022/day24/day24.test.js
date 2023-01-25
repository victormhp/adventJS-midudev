import { canExit } from './day24';
import { describe, it, expect } from 'vitest';

describe('Reto #24: El último reto es un laberinto', () => {
  const testCases = [
    createTestCase(
      [
        [
          [' ', ' ', 'W', ' ', 'S'],
          [' ', ' ', ' ', ' ', ' '],
          [' ', ' ', ' ', 'W', ' '],
          ['W', 'W', ' ', 'W', 'W'],
          [' ', ' ', ' ', ' ', 'E'],
        ],
      ],
      true,
      'should return true when there is a possible way out of the maze'
    ),
    createTestCase(
      [
        [
          [' ', ' ', 'W', 'W', 'S'],
          [' ', ' ', ' ', 'W', ' '],
          [' ', ' ', ' ', 'W', ' '],
          ['W', 'W', ' ', 'W', 'W'],
          [' ', ' ', ' ', ' ', 'E'],
        ],
      ],
      false,
      'should return false when there is not a possible way out of the maze'
    ),
    createTestCase(
      [
        [
          [' ', ' ', 'W', 'W', 'S'],
          [' ', ' ', ' ', 'W', ' '],
          [' ', ' ', ' ', 'W', ' '],
          ['W', 'W', ' ', ' ', 'W'],
          [' ', ' ', ' ', ' ', 'E'],
        ],
      ],
      false,
      'should return false when there is not a possible way out of the maze'
    ),
  ];

  it('Type Test - should return a boolean', () => {
    expect(
      canExit([
        [' ', ' ', 'W', ' ', 'S'],
        [' ', ' ', ' ', ' ', ' '],
        [' ', ' ', ' ', 'W', ' '],
        ['W', 'W', ' ', 'W', 'W'],
        [' ', ' ', ' ', ' ', 'E'],
      ])
    ).toBeTypeOf('boolean');
  });

  it.each(testCases)('#%# $description', ({ args, expected }) => {
    expect(canExit(...args)).toEqual(expected);
  });
});
