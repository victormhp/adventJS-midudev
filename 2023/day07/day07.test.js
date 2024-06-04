import { drawGift } from './day07';
import { describe, it, expect } from 'vitest';

describe('Reto #7: Las cajas en 3D', () => {
  const testCases = [
    createTestCase(
      [4, '+'],
      `   ####\n  #++##\n #++#+#\n####++#\n#++#+#\n#++##\n####\n`,
      'should return a 3d cube of ascii characters',
    ),
    createTestCase(
      [5, '*'],
      `    #####\n   #***##\n  #***#*#\n #***#**#\n#####***#\n#***#**#\n#***#*#\n#***##\n#####\n`,
      'should return a 3d cube of ascii characters',
    ),
    createTestCase([1, '+'], '#\n', 'should return a # character'),
  ];

  it('Type Test - should return a string', () => {
    expect(drawGift(4, '*')).toBeTypeOf('string');
  });

  it.each(testCases)('#%# $description', ({ args, expected }) => {
    expect(drawGift(...args)).toEqual(expected);
  });
});
