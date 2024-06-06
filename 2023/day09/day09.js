function adjustLights(lights) {
  let p1 = ['🔴', '🟢'];
  let p2 = ['🟢', '🔴'];
  let pc1 = 0;
  let pc2 = 0;

  lights.forEach((l, i) => {
    if (l !== p1[i % 2]) pc1++;
    if (l !== p2[i % 2]) pc2++;
  });

  return Math.min(pc1, pc2);
}

export { adjustLights };
