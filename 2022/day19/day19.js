function sortToys(toys, positions) {
  const min = Math.min(...positions);
  positions.forEach(e => e - min);

  return toys.sort((a, b) => positions[toys.indexOf(a)] - positions[toys.indexOf(b)]);
}

export { sortToys };
