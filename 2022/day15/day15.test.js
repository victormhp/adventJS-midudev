import { decorateTree } from './day15';
import { describe, it, expect } from 'vitest';

describe('Reto #15: Decorando el árbol de Navidad', () => {
  const testCases = [
    createTestCase(['B P R P'], ['R', 'P B', 'R B B', 'B P R P']),
    createTestCase(['B B'], ['B', 'B B']),
    createTestCase(
      ['B B P R P R R'],
      ['B', 'R P', 'B P P', 'P R B R', 'P P B B P', 'B R B B B R', 'B B P R P R R']
    ),
  ];

  it('Type Test - should return an array', () => {
    expect(decorateTree('')).toBeInstanceOf(Array);
  });

  it.each(testCases)(
    '#%# should return the tree that would be generated with the base B P R P',
    ({ args, expected }) => {
      expect(decorateTree(...args)).toEqual(expected);
    }
  );
});
