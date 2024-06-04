function drawGift(size, symbol) {
  if (size === 1) return '#\n';

  let top = '';
  for (let i = 0; i < size - 1; i++) {
    const spaces = size - i - 1;
    let line = ' '.repeat(spaces) + '#'.repeat(size + i) + '\n';

    if (i > 0) {
      let arr = line.split('');
      const start = spaces + 1;
      const half = start + size - 2;
      const end = arr.length - 2;
      arr = arr.fill(symbol, start, half);
      arr = arr.fill(symbol, half + 1, end);
      line = arr.join('');
    }

    top += line;
  }

  const middle = '#'.repeat(size) + symbol.repeat(size - 2) + '#';
  const bottom = top
    .split('\n')
    .map(s => s.trim())
    .reverse()
    .join('\n');

  return top + middle + bottom + '\n';
}

export { drawGift };
