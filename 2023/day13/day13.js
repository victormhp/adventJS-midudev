function calculateTime(deliveries) {
  let time = deliveries.reduce((acc, time) => {
    let [h, m, s] = time.split(':').map(Number);
    return acc + h * 3600 + m * 60 + s;
  }, 0);

  const totalTime = 7 * 3600;
  let diff = Math.abs(totalTime - time);
  const sign = time < totalTime ? '-' : '';

  const h = String(Math.floor(diff / 3600)).padStart(2, '0');
  const m = String(Math.floor((diff % 3600) / 60)).padStart(2, '0');
  const s = String(diff % 60).padStart(2, '0');

  return `${sign}${h}:${m}:${s}`;
}

export { calculateTime };
