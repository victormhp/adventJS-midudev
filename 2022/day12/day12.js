function selectSleigh(distance, sleighs) {
  const consumptions = sleighs.map(e => e['consumption'] * distance);
  const bestSleigh = Math.max(...consumptions.filter(e => e <= 20));

  if (bestSleigh > 0) {
    const name = sleighs.find(e => e['consumption'] === bestSleigh / distance);
    return name['name'];
  }

  return null;
}

export { selectSleigh };
