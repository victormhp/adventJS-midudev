import { wrapping } from './day01';
import { describe, it, expect } from 'vitest';

describe('Reto #1: ¡Automatizando envolver regalos de navidad!', () => {
  const testCases = [
    createTestCase(
      [['cat', 'game', 'socks']],
      ['*****\n*cat*\n*****', '******\n*game*\n******', '*******\n*socks*\n*******'],
      'should return a list of wrapped gifts'
    ),
    createTestCase([['midu']], ['******\n*midu*\n******'], 'should return a list of wrapped gifts'),
    createTestCase([['a']], ['***\n*a*\n***'], 'should return a list of wrapped gifts'),
    createTestCase([[]], [], 'should return en empty list if no gifts are given'),
  ];

  it('Type Test - should return an array', () => {
    expect(wrapping([])).toBeInstanceOf(Array);
  });

  it.each(testCases)('#%# $description', ({ args, expected }) => {
    expect(wrapping(...args)).toEqual(expected);
  });
});
