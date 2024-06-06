import { adjustLights } from './day09';
import { describe, it, expect } from 'vitest';

describe('Reto #9: Aleterna las luces', () => {
  const testCases = [
    createTestCase(
      [['🟢', '🔴', '🟢', '🟢', '🟢']],
      1,
      'should return the min number of lights to change in order to have all colors alternated',
    ),
    createTestCase(
      [['🔴', '🔴', '🟢', '🔴', '🟢']],
      1,
      'should return the min number of lights to change in order to have all colors alternated',
    ),
    createTestCase(
      [['🔴', '🔴', '🟢', '🟢', '🔴']],
      2,
      'should return the min number of lights to change in order to have all colors alternated',
    ),
  ];

  it('Type Test - should return a number', () => {
    expect(adjustLights([])).toBeTypeOf('number');
  });

  it.each(testCases)('#%# $description', ({ args, expected }) => {
    expect(adjustLights(...args)).toEqual(expected);
  });
});
