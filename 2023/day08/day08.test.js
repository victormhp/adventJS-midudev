import { organizeGifts } from './day08';
import { describe, it, expect } from 'vitest';

describe('Reto #8: Ordenando el almacen', () => {
  const testCases = [
    createTestCase(
      ['76a11b'],
      '[a]{a}{a}(aaaaaa){b}(b)',
      'should return chain of gifts with reach corresponding value',
    ),
    createTestCase(
      ['20a'],
      '{a}{a}',
      'should return chain of gifts with reach corresponding value',
    ),
    createTestCase(
      ['19d51e'],
      '{d}(ddddddddd)[e](e)',
      'should return chain of gifts with reach corresponding value',
    ),
  ];

  it('Type Test - should return a string', () => {
    expect(organizeGifts('76a11b')).toBeTypeOf('string');
  });

  it.each(testCases)('#%# $description', ({ args, expected }) => {
    expect(organizeGifts(...args)).toEqual(expected);
  });
});
