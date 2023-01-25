import { getFilesToBackup } from './day13';
import { describe, it, expect } from 'vitest';

describe('Reto #13: Backup de los archivos de Papá Noel', () => {
  const testCases = [
    createTestCase(
      [
        1546300800,
        [
          [3, 1546301100],
          [2, 1546300800],
          [1, 1546300800],
          [1, 1546300900],
          [1, 1546301000],
        ],
      ],
      [1, 3],
      'should return an array of the IDs of the files that we need to make a backup of because they have been modified since the last backup'
    ),
    createTestCase(
      [
        1546300600,
        [
          [1, 1546300800],
          [2, 1546300800],
          [1, 1546300900],
          [1, 1546301000],
          [3, 1546301100],
        ],
      ],
      [1, 2, 3],
      'should return an array of the IDs of the files that we need to make a backup of because they have been modified since the last backup'
    ),
    createTestCase(
      [
        1556300600,
        [
          [1, 1546300800],
          [2, 1546300800],
          [1, 1546300900],
          [1, 1546301000],
          [3, 1546301100],
        ],
      ],
      [],
      'should return an empty array if none of the files require a backup'
    ),
  ];

  it('Type Test - should return an array', () => {
    expect(getFilesToBackup(0, [[], [], []])).toBeInstanceOf(Array);
  });

  it.each(testCases)('#%# $description', ({ args, expected }) => {
    expect(getFilesToBackup(...args)).toEqual(expected);
  });
});
