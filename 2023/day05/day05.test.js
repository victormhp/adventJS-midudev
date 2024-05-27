import { cyberReindeer } from './day05';
import { describe, it, expect } from 'vitest';

describe('Reto #5: El Cybertruck de Santa', () => {
  const testCases = [
    createTestCase(
      ['S..|...|..', 10],
      [
        'S..|...|..',
        '.S.|...|..',
        '..S|...|..',
        '..S|...|..',
        '..S|...|..',
        '...S...*..',
        '...*S..*..',
        '...*.S.*..',
        '...*..S*..',
        '...*...S..',
      ],
      'should return an array with all different steps of the road',
    ),
  ];

  it('Type Test - should return an array of strings', () => {
    expect(cyberReindeer([], 0, 0)).toBeInstanceOf(Array);
  });

  it.each(testCases)('#%# $description', ({ args, expected }) => {
    expect(cyberReindeer(...args)).toEqual(expected);
  });
});
