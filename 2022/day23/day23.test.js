import { executeCommands } from './day23';
import { describe, it, expect } from 'vitest';

describe('Reto #23: Compilador de Papá Noel', () => {
  const testCases = [
    createTestCase(
      [['MOV 5,V00', 'MOV 10,V01', 'DEC V00', 'ADD V00,V01']],
      [14, 10, 0, 0, 0, 0, 0, 0]
    ),
    createTestCase([['MOV 255,V00', 'INC V00', 'DEC V01', 'DEC V01']], [0, 254, 0, 0, 0, 0, 0, 0]),
    createTestCase(
      [['MOV 10,V00', 'DEC V00', 'INC V01', 'JMP 1', 'INC V06']],
      [0, 10, 0, 0, 0, 0, 1, 0]
    ),
  ];

  it('Type Test - should return an array', () => {
    expect(executeCommands(['MOV 5,V00', 'MOV 10,V01', 'DEC V00', 'ADD V00,V01'])).toBeInstanceOf(
      Array
    );
  });

  it.each(testCases)(
    '#%# should return a matrix containing the results for every register from V00 to V07',
    ({ args, expected }) => {
      expect(executeCommands(...args)).toEqual(expected);
    }
  );
});
