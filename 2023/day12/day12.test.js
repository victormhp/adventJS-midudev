import { checkIsValidCopy } from './day12';
import { describe, it, expect } from 'vitest';

describe('Reto #12: Es una copia valida?', () => {
  const testCases = [
    createTestCase(['Santa Claus is coming', 'sa#ta Cl#us i+ comin#'], true),
    createTestCase(['s#nta Cla#s is coming', 'p#nt: cla#s #s c+min#'], false),
    createTestCase(['Santa Claus', 's#+:. c:. s'], true),
  ];

  it('Type Test - should return a boolean', () => {
    expect(checkIsValidCopy('Santa Claus is coming', 'sa#ta Cl#us i+ comin#')).toBeTypeOf(
      'boolean',
    );
  });

  it.each(testCases)(
    'should return true or false if the original and the copy letter are the same',
    ({ args, expected }) => {
      expect(checkIsValidCopy(...args)).toEqual(expected);
    },
  );
});
