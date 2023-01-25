import { carryGifts } from './day17';
import { describe, it, expect } from 'vitest';

describe('Reto #17: Llevando los regalos en sacos', () => {
  const testCases = [
    createTestCase([['game', 'bike', 'book', 'toy'], 7], ['game', 'bike', 'book toy']),
    createTestCase([['game', 'bike', 'book', 'toy'], 4], ['game', 'bike', 'book', 'toy']),
    createTestCase([['toy', 'gamme', 'toy', 'bike'], 6], ['toy', 'gamme', 'toy', 'bike']),
  ];

  it('Type Test - should return an array', () => {
    expect(carryGifts(['game', 'bike', 'book', 'toy'], 10)).toBeInstanceOf(Array);
  });

  it.each(testCases)(
    '#%# should return an array with the names of the gifts in each bag',
    ({ args, expected }) => {
      expect(carryGifts(...args)).toEqual(expected);
    }
  );
});
