function createCube(size) {
  const top = [];
  const bottom = [];

  for (let i = 1; i <= size; i++) {
    top.push(`${' '.repeat(size - i) + '/\\'.repeat(i) + '_\\'.repeat(size)}`);
    bottom.push(`${' '.repeat(i - 1) + '\\/'.repeat(size - i + 1) + '_/'.repeat(size)}`);
  }

  return [...top, ...bottom].join('\n');
}

export { createCube };
