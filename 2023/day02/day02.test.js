import { manufacture } from './day02';
import { describe, it, expect } from 'vitest';

describe('Reto #2: Ponemos en marcha la fabrica', () => {
  const testCases = [
    createTestCase(
      [['tren', 'oso', 'pelota'], 'tronesa'],
      ['tren', 'oso'],
      'should return an array with tren and oso',
    ),
    createTestCase(
      [['juego', 'puzzle'], 'jlepuz'],
      ['puzzle'],
      'should return an array with puzzle',
    ),
  ];

  it('Type Test - should return an array', () => {
    expect(manufacture(['juego', 'puzzle'], 'jlepuz')).toBeInstanceOf(Array);
  });

  it.each(testCases)('#%# $description', ({ args, expected }) => {
    expect(manufacture(...args)).toEqual(expected);
  });
});
