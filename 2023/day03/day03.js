export function findNaughtyStep(original, modified) {
  const [max, min] =
    original.length > modified.length ? [original, modified] : [modified, original];
  return max.split('').find((l, i) => l !== min[i]) || '';
}
