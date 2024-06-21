import { transformTree } from './day16';
import { describe, it, expect } from 'vitest';

describe('Reto #16: Despliegue en viernes', () => {
  const testCases = [
    createTestCase([[1, 2, 3]], {
      value: 1,
      left: {
        value: 2,
        left: null,
        right: null,
      },
      right: {
        value: 3,
        left: null,
        right: null,
      },
    }),
    createTestCase([[1, 2, 3, 4, 5]], {
      value: 1,
      left: {
        value: 2,
        left: {
          value: 4,
          left: null,
          right: null,
        },
        right: {
          value: 5,
          left: null,
          right: null,
        },
      },
      right: {
        value: 3,
        left: null,
        right: null,
      },
    }),
    createTestCase([[2, 7, 5, null, 6, null, 9, null, null, 1, 11, null, null, null, 10]], {
      value: 2,
      left: {
        value: 7,
        left: null,
        right: {
          value: 6,
          left: {
            value: 1,
            left: null,
            right: null,
          },
          right: {
            value: 11,
            left: null,
            right: null,
          },
        },
      },
      right: {
        value: 5,
        left: null,
        right: {
          value: 9,
          left: null,
          right: {
            value: 10,
            left: null,
            right: null,
          },
        },
      },
    }),
  ];

  it('Type Test - should return null', () => {
    expect(transformTree([])).toBeNull();
  });

  it('Type Test - should return an object', () => {
    expect(transformTree([1])).toBeInstanceOf(Object);
  });

  it.each(testCases)(
    '#%# should return the text string formatted according to the established rules',
    ({ args, expected }) => {
      expect(transformTree(...args)).toEqual(expected);
    },
  );
});
