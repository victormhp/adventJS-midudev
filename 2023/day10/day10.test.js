import { createChristmasTree } from './day10';
import { describe, it, expect } from 'vitest';

describe('Reto #10: Crea tu propio arbol de navidad', () => {
  const testCases = [
    createTestCase(
      ['x', 3],
      '  x\n x x\nx x x\n  |\n',
      'should return a tree with the corresponding ornaments and trunk',
    ),
    createTestCase(
      ['*@o', 3],
      '  *\n @ o\n* @ o\n  |\n',
      'should return a tree with the corresponding ornaments and trunk',
    ),
    createTestCase(
      ['123', 5],
      '    1\n   2 3\n  1 2 3\n 1 2 3 1\n2 3 1 2 3\n    |\n',
      'should return a tree with the corresponding ornaments and trunk',
    ),
  ];

  it('Type Test - should return a string', () => {
    expect(createChristmasTree('12', 2)).toBeTypeOf('string');
  });

  it.each(testCases)('#%# $description', ({ args, expected }) => {
    expect(createChristmasTree(...args)).toEqual(expected);
  });
});
