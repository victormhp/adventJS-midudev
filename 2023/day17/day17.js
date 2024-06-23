function optimizeIntervals(intervals) {
  intervals.sort((a, b) => a[0] - b[0]);
  const res = [intervals[0]];

  for (let i = 0; i < intervals.length; i++) {
    const [s, e] = intervals[i];
    const lastInterval = res[res.length - 1];

    if (s <= lastInterval[1]) {
      lastInterval[1] = Math.max(lastInterval[1], e);
    } else {
      res.push(intervals[i]);
    }
  }

  return res;
}

export { optimizeIntervals };
