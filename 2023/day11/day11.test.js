import { getIndexsForPalindrome } from './day11';
import { describe, it, expect } from 'vitest';

describe('Reto #11: Papá Noel es Scrum Master', () => {
  const testCases = [
    createTestCase(['anna'], []),
    createTestCase(['abac'], null),
    createTestCase(['abab'], [0, 1]),
  ];

  it('Type Test - should return an array', () => {
    expect(getIndexsForPalindrome('anna')).toBeInstanceOf(Array)
  });

  it('Type Test - should return null', () => {
    expect(getIndexsForPalindrome('abac')).toBeNull();
  });

  it.each(testCases)(
    '#%# should return $expected if it corresponds to the portion of the work completed.',
    ({ args, expected }) => {
      expect(getIndexsForPalindrome(...args)).toEqual(expected);
    }
  );
});
