import { fixLetter } from './day16';
import { describe, it, expect } from 'vitest';

describe('Reto #16: Arreglando las cartas de Papá Noel', () => {
  const testCases = [
    createTestCase(
      [
        ` hello,  how are you??     do you know if santa claus exists?  i really hope he does!  bye  `,
      ],
      'Hello, how are you? Do you know if Santa Claus exists? I really hope he does! Bye.'
    ),
    createTestCase(
      [
        "  Hi Santa claus. I'm a girl from Barcelona , Spain . please, send me a bike.  Is it possible?",
      ],
      "Hi Santa Claus. I'm a girl from Barcelona, Spain. Please, send me a bike. Is it possible?"
    ),
    createTestCase(['  hi    santa    claus '], 'Hi Santa Claus.'),
  ];

  it('Type Test - should return a string', () => {
    expect(fixLetter('')).toBeTypeOf('string');
  });

  it.each(testCases)(
    '#%# should return the text string formatted according to the established rules',
    ({ args, expected }) => {
      expect(fixLetter(...args)).toEqual(expected);
    }
  );
});
