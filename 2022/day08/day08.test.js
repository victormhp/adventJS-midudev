import { checkPart } from './day08';
import { describe, it, expect } from 'vitest';

describe('Reto #8: ¡Necesitamos un mecánico!', () => {
  const testCases = [
    createTestCase(
      ['uwu'],
      true,
      'should return true if the word is a palindrome without deleting any character'
    ),
    createTestCase(
      ['midu'],
      false,
      'should return false if the word, after deleting a character, is not a palindrome.'
    ),
    createTestCase(
      ['lolol'],
      true,
      'should return true of tje word, after deleting a character, is a palindrome'
    ),
  ];

  it('Type Test - should return a boolean', () => {
    expect(checkPart('')).toBeTypeOf('boolean');
  });

  it.each(testCases)('#%# $description', ({ args, expected }) => {
    expect(checkPart(...args)).toEqual(expected);
  });
});
