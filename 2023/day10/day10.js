function createChristmasTree(ornaments, height) {
  const base = height * 2 - 1;
  const mid = Math.floor(base / 2);
  const trunk = ' '.repeat(mid) + '|\n';

  let tree = '';
  let count = 0;
  for (let i = 0; i < height; i++) {
    const chars = Array.from({ length: i + 1 }, () => {
      return ornaments[count++ % ornaments.length];
    }).join(' ');
    const spaces = ' '.repeat(height - i - 1);
    tree += spaces + chars + '\n';
  }

  return tree + trunk;
}

export { createChristmasTree };
