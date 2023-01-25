function printTable(gifts) {
  let maxGamesLength = Math.max(...gifts.map(({ name }) => name.length));
  let maxQuantityLength = Math.max(...gifts.map(({ quantity }) => quantity.toString().length));

  maxGamesLength = Math.max('Game'.length, maxGamesLength);
  maxQuantityLength = Math.max('Quantity'.length, maxQuantityLength);

  const totalLength = maxGamesLength + maxQuantityLength + 7;

  const firstLine = `${'+'.repeat(totalLength)}\n`;
  const lastLine = '*'.repeat(totalLength);

  const headerLine = `| ${'Gift'.padEnd(maxGamesLength)} | ${'Quantity'.padEnd(
    maxQuantityLength
  )} |\n`;

  const hyphenLine = `| ${'-'.repeat(maxGamesLength)} | ${'-'.repeat(maxQuantityLength)} |\n`;

  const dataLines = gifts.map(gift => {
    return `| ${gift['name'].padEnd(maxGamesLength)} | ${gift['quantity']
      .toString()
      .padEnd(maxQuantityLength)} |\n`;
  });

  return firstLine + headerLine + hyphenLine + dataLines.join('') + lastLine;
}

export { printTable };
