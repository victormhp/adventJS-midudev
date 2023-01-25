import { createCube } from './day06';
import { describe, it, expect } from 'vitest';

describe('Reto #6: Creando adornos navideños', () => {
  const testCases = [
    createTestCase(
      [3],
      '  /\\_\\_\\_\\\n /\\/\\_\\_\\_\\\n/\\/\\/\\_\\_\\_\\\n\\/\\/\\/_/_/_/\n \\/\\/_/_/_/\n  \\/_/_/_/',
      'should return a 3x3 cube'
    ),
    createTestCase([1], '/\\_\\\n\\/_/', 'should return a 1x1 cube'),
    createTestCase(
      [2],
      ' /\\_\\_\\\n/\\/\\_\\_\\\n\\/\\/_/_/\n \\/_/_/',
      'should return a 2x2 cube'
    ),
  ];

  it('Type Test - should return a string', () => {
    expect(createCube(0)).toBeTypeOf('string');
  });

  it.each(testCases)('#%# $description', ({ args, expected }) => {
    expect(createCube(...args)).toEqual(expected);
  });
});
