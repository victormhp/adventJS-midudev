import { selectSleigh } from './day12';
import { describe, it, expect } from 'vitest';

describe('Reto #12: Trineos eléctricos, ¡wow!', () => {
  const testCases = [
    createTestCase(
      [
        1,
        [
          { name: 'pheralb', consumption: 0.3 },
          { name: 'TMChein', consumption: 0.5 },
        ],
      ],
      'TMChein'
    ),
    createTestCase(
      [
        10,
        [
          { name: 'Pedrosillano', consumption: 1 },
          { name: 'SamarJaffal', consumption: 5 },
        ],
      ],
      'Pedrosillano'
    ),
    createTestCase(
      [
        10,
        [
          { name: 'Pedrosillano', consumption: 1 },
          { name: 'SamarJaffal', consumption: 2 },
          { name: 'marcospage', consumption: 3 },
        ],
      ],
      'SamarJaffal'
    ),
  ];

  it('Type Test - should return a string', () => {
    expect(
      selectSleigh(1, [
        { name: 'pheralb', consumption: 0.3 },
        { name: 'TMChein', consumption: 0.5 },
      ])
    ).toBeTypeOf('string');
  });

  it.each(testCases)(
    '#%# should return the name of the best available sleigh that will allow us to cover the distance',
    ({ args, expected }) => {
      expect(selectSleigh(...args)).toEqual(expected);
    }
  );
});
