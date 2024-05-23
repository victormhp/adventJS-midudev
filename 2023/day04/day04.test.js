import { decode } from './day04';
import { describe, it, expect } from 'vitest';

describe('Reto #4: Dale la vuelta a los parentesis', () => {
  const testCases = [
    createTestCase(['hola (odnum)'], 'hola mundo', 'Should print "hola mundo"'),
    createTestCase(['(olleh) (dlrow)!'], 'hello world!', 'Should print "hello world!"'),
    createTestCase(['sa(u(cla)atn)s'], 'santaclaus', 'Should print "santaclaus"'),
  ];

  it('Type Test - should return a string', () => {
    expect(decode('hola (odnum)')).toBeTypeOf('string');
  });

  it.each(testCases)('#%# $description', ({ args, expected }) => {
    expect(decode(...args)).toEqual(expected);
  });
});
