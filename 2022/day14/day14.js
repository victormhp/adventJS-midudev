function getOptimalPath(path) {
  return path.reduceRight((acc, curr) => {
    return curr.map((e, i) => {
      return e + Math.min(acc[i], acc[i + 1]);
    });
  })[0];
}

export { getOptimalPath };
