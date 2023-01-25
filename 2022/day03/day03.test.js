import { distributeGifts } from './day03';
import { describe, it, expect } from 'vitest';

describe('Reto #3: ¿Cuátas cajas de regalos puede llevar Papá Noel?', () => {
  const testCases = [
    createTestCase(
      [
        ['a', 'b', 'c'],
        ['d', 'e'],
      ],
      1,
      'should return 1 box'
    ),
    createTestCase(
      [['videogames', 'console'], ['midu']],
      0,
      'should return 0 if reindeers can’t carry any pack'
    ),
    createTestCase(
      [
        ['game', 'videoconsole', 'computer'],
        [
          'midudev',
          'pheralb',
          'codingwithdani',
          'carlosble',
          'blasco',
          'facundocapua',
          'madeval',
          'memxd',
        ],
      ],
      5,
      'should return 5 boxes'
    ),
    createTestCase(
      [
        ['music'],
        [
          'midudev',
          'pheralb',
          'codingwithdani',
          'carlosble',
          'blasco',
          'facundocapua',
          'madeval',
          'memxd',
        ],
      ],
      26,
      'should return 26 boxes'
    ),
  ];

  it('Type Test - should return a number', () => {
    expect(distributeGifts([], [])).toBeTypeOf('number');
  });

  it.each(testCases)('#%# $description', ({ args, expected }) => {
    expect(distributeGifts(...args)).toEqual(expected);
  });
});
