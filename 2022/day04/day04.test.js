import { fitsInOneBox } from './day04';
import { describe, it, expect } from 'vitest';

describe('Reto #4: Una caja dentro de otra caja y otra...', () => {
  const testCases = [
    createTestCase(
      [
        [
          { l: 1, w: 1, h: 10 },
          { l: 3, w: 3, h: 12 },
          { l: 2, w: 2, h: 1 },
        ],
      ],
      false,
      'should not fit in one box'
    ),
    createTestCase(
      [
        [
          { l: 1, w: 1, h: 1 },
          { l: 2, w: 2, h: 2 },
        ],
      ],
      true,
      'should fit in one box'
    ),
    createTestCase(
      [
        [
          { l: 1, w: 1, h: 1 },
          { l: 2, w: 2, h: 2 },
          { l: 3, w: 1, h: 3 },
        ],
      ],
      false,
      'should not fit in one box'
    ),
    createTestCase(
      [
        [
          { l: 1, w: 1, h: 1 },
          { l: 2, w: 2, h: 2 },
          { l: 2, w: 10, h: 2 },
        ],
      ],
      false,
      'should not fit in one box'
    ),
  ];

  it('Type Test - should return a boolean', () => {
    expect(
      fitsInOneBox([
        { l: 1, w: 1, h: 1 },
        { l: 2, w: 2, h: 2 },
      ])
    ).toBeTypeOf('boolean');
  });

  it.each(testCases)('#%# $description', ({ args, expected }) => {
    expect(fitsInOneBox(...args)).toEqual(expected);
  });
});
