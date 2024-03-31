import { findNaughtyStep } from './day03';
import { describe, it, expect } from 'vitest';

describe('Reto #3: El elfo travieso', () => {
  const testCases = [
    createTestCase(['abcde', 'abcd'], 'e', 'should return string e'),
    createTestCase(['stepfor', 'stepor'], 'f', 'should return string f'),
    createTestCase(['', ''], '', 'should return empty string'),
  ];

  it('Type Test - should return a string', () => {
    expect(findNaughtyStep('abcde', 'abcd')).toBeTypeOf('string');
  });

  it.each(testCases)('#%# $description', ({ args, expected }) => {
    expect(findNaughtyStep(...args)).toEqual(expected);
  });
});
