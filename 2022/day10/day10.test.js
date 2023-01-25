import { checkJump } from './day10';
import { describe, it, expect } from 'vitest';

describe('Reto #10: El salto del trineo de Papá Noel', () => {
  const testCases = [
    createTestCase(
      [[1, 3, 8, 5, 2]],
      true,
      'should return true if the jump progresses from the bottom to the top, and then back to the bottom'
    ),
    createTestCase(
      [[1, 7, 3, 5]],
      false,
      'should return false if the jump goes from bottom to top, from top to bottom and then goes up again.'
    ),
  ];

  it('Type Test - should return a boolean', () => {
    expect(checkJump([])).toBeTypeOf('boolean');
  });

  it.each(testCases)('#%# $description', ({ args, expected }) => {
    expect(checkJump(...args)).toEqual(expected);
  });
});
