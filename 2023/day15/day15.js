function autonomousDrive(store, movements) {
  store = store.map(row => row.split(''));

  let start = [-1, -1];
  store.forEach((_, i) => {
    const pos = store[i].indexOf('!');
    if (pos !== -1) {
      start = [i, pos];
    }
  })

  const steps = { R: [0, 1], L: [0, -1], U: [-1, 0], D: [1, 0] };

  movements.forEach(m => {
    const [dx, dy] = steps[m];
    const [x, y] = start;
    const nx = x + dx;
    const ny = y + dy;

    if (nx >= 0 && nx < store.length && ny >= 0 && ny < store[0].length) {
      const [nxVal, nyVal] = [store[nx][ny], store[x][y]];

      if (nxVal !== '*') {
        store[x][y] = nxVal;
        store[nx][ny] = nyVal;
        start = [nx, ny];
      }
    }
  });

  return store.map(row => row.join(''));
}

export { autonomousDrive };
