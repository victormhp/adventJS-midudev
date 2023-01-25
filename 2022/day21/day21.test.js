import { printTable } from './day21';
import { describe, it, expect } from 'vitest';

describe('Reto #21: Creando la tabla de regalos', () => {
  const testCases = [
    createTestCase(
      [
        [
          { name: 'PlayStation 5', quantity: 9234782374892 },
          { name: 'Book Learn Web Dev', quantity: 23531 },
        ],
      ],
      '++++++++++++++++++++++++++++++++++++++\n| Gift               | Quantity      |\n| ------------------ | ------------- |\n| PlayStation 5      | 9234782374892 |\n| Book Learn Web Dev | 23531         |\n**************************************'
    ),
    createTestCase(
      [
        [
          { name: 'Game', quantity: 2 },
          { name: 'Bike', quantity: 1 },
          { name: 'Book', quantity: 3 },
        ],
      ],
      '+++++++++++++++++++\n| Gift | Quantity |\n| ---- | -------- |\n| Game | 2        |\n| Bike | 1        |\n| Book | 3        |\n*******************'
    ),
    createTestCase(
      [[{ name: 'Game', quantity: 10000 }]],
      '+++++++++++++++++++\n| Gift | Quantity |\n| ---- | -------- |\n| Game | 10000    |\n*******************'
    ),
  ];

  it('Type Test - should return a string', () => {
    expect(
      printTable([
        { name: 'Game', quantity: 2 },
        { name: 'Bike', quantity: 1 },
        { name: 'Book', quantity: 3 },
      ])
    ).toBeTypeOf('string');
  });

  it.each(testCases)(
    '#%# should return a table that displays the gifts and their respective quantities',
    ({ args, expected }) => {
      expect(printTable(...args)).toEqual(expected);
    }
  );
});
