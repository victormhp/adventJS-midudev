import { getCompleted } from './day11';
import { describe, it, expect } from 'vitest';

describe('Reto #11: Papá Noel es Scrum Master', () => {
  const testCases = [
    createTestCase(['01:00:00', '03:00:00'], '1/3'),
    createTestCase(['02:00:00', '04:00:00'], '1/2'),
    createTestCase(['01:00:00', '01:00:00'], '1/1'),
    createTestCase(['00:10:00', '01:00:00'], '1/6'),
    createTestCase(['01:10:10', '03:30:30'], '1/3'),
    createTestCase(['02:20:20', '03:30:30'], '2/3'),
    createTestCase(['03:30:30', '05:50:50'], '3/5'),
  ];

  it('Type Test - should return a string', () => {
    expect(getCompleted('', '')).toBeTypeOf('string');
  });

  it.each(testCases)(
    '#%# should return $expected if it corresponds to the portion of the work completed.',
    ({ args, expected }) => {
      expect(getCompleted(...args)).toEqual(expected);
    }
  );
});
