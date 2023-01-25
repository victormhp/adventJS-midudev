import { howManyReindeers } from './day20';
import { describe, it, expect } from 'vitest';

describe('Reto #20: Más viajes retadores', () => {
  const testCases = [
    createTestCase(
      [
        [
          { type: 'Nuclear', weightCapacity: 50 },
          { type: 'Electric', weightCapacity: 10 },
          { type: 'Gasoline', weightCapacity: 5 },
          { type: 'Diesel', weightCapacity: 1 },
        ],
        [
          { country: 'Spain', weight: 30 },
          { country: 'France', weight: 17 },
          { country: 'Italy', weight: 50 },
        ],
      ],
      [
        {
          country: 'Spain',
          reindeers: [
            { type: 'Electric', num: 1 },
            { type: 'Gasoline', num: 3 },
            { type: 'Diesel', num: 5 },
          ],
        },
        {
          country: 'France',
          reindeers: [
            { type: 'Electric', num: 1 },
            { type: 'Gasoline', num: 1 },
            { type: 'Diesel', num: 2 },
          ],
        },
        {
          country: 'Italy',
          reindeers: [
            { type: 'Electric', num: 3 },
            { type: 'Gasoline', num: 3 },
            { type: 'Diesel', num: 5 },
          ],
        },
      ]
    ),
    createTestCase(
      [
        [
          { type: 'Electric', weightCapacity: 10 },
          { type: 'Gasoline', weightCapacity: 5 },
          { type: 'Diesel', weightCapacity: 1 },
        ],
        [{ country: 'Spain', weight: 37 }],
      ],
      [
        {
          country: 'Spain',
          reindeers: [
            {
              type: 'Electric',
              num: 2,
            },
            {
              type: 'Gasoline',
              num: 2,
            },
            {
              type: 'Diesel',
              num: 7,
            },
          ],
        },
      ]
    ),
    createTestCase(
      [
        [
          { type: 'Nuclear', weightCapacity: 50 },
          { type: 'Electric', weightCapacity: 10 },
          { type: 'Gasoline', weightCapacity: 5 },
          { type: 'Diesel', weightCapacity: 1 },
        ],
        [
          { country: 'Spain', weight: 30 },
          { country: 'Germany', weight: 7 },
          { country: 'France', weight: 17 },
          { country: 'Italy', weight: 50 },
        ],
      ],
      [
        {
          country: 'Spain',
          reindeers: [
            {
              type: 'Electric',
              num: 1,
            },
            {
              type: 'Gasoline',
              num: 3,
            },
            {
              type: 'Diesel',
              num: 5,
            },
          ],
        },
        {
          country: 'Germany',
          reindeers: [
            {
              type: 'Gasoline',
              num: 1,
            },
            {
              type: 'Diesel',
              num: 2,
            },
          ],
        },
        {
          country: 'France',
          reindeers: [
            {
              type: 'Electric',
              num: 1,
            },
            {
              type: 'Gasoline',
              num: 1,
            },
            {
              type: 'Diesel',
              num: 2,
            },
          ],
        },
        {
          country: 'Italy',
          reindeers: [
            {
              type: 'Electric',
              num: 3,
            },
            {
              type: 'Gasoline',
              num: 3,
            },
            {
              type: 'Diesel',
              num: 5,
            },
          ],
        },
      ]
    ),
  ];

  it('Type Test - should return an array', () => {
    expect(howManyReindeers([{}, {}], [{}, {}])).toBeInstanceOf(Array);
  });

  it.each(testCases)(
    '#%# should return an array of objects that display the distribution of reindeer per country',
    ({ args, expected }) => {
      expect(howManyReindeers(...args)).toEqual(expected);
    }
  );
});
