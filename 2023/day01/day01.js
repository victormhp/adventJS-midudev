export function findFirstRepeated(gifts) {
  const ids = new Set();

  for (const gift of gifts) {
    if (ids.has(gift)) return gift;
    ids.add(gift);
  }

  return -1;
}
