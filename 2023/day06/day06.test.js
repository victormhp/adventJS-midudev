import { maxDistance } from './day06';
import { describe, it, expect } from 'vitest';

describe('Reto #6: Los renos a prueba', () => {
  const testCases = [
    createTestCase(['>>*<'], 2, 'should return distance of 2'),
    createTestCase(['<<<>'], 2, 'should return distance of 2'),
    createTestCase(['>***>'], 5, 'should return distance of 5'),
  ];

  it('Type Test - should return a number', () => {
    expect(maxDistance('>>')).toBeTypeOf('number');
  });

  it.each(testCases)('#%# $description', ({ args, expected }) => {
    expect(maxDistance(...args)).toEqual(expected);
  });
});
