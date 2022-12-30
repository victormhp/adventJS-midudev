function sortToys(toys, positions) {
  const min = Math.min(...positions);
  positions.forEach((_, i, arr) => arr[i] - min);

  return toys.sort(
    (a, b) => positions[toys.indexOf(a)] - positions[toys.indexOf(b)]
  );
}
