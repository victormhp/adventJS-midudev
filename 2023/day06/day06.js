function maxDistance(movements) {
  let c = 0;
  return (
    Math.abs(
      movements.split('').reduce((acc, curr) => {
        curr === '>' ? acc++ : curr === '<' ? acc-- : c++;
        return acc;
      }, 0),
    ) + c
  );
}

export { maxDistance };
