function cyberReindeer(road, time) {
  let moves = [road],
    curr = 0,
    d = '.';

  for (let i = 1; i < time; i++) {
    if (i == 5) road = road.replace(/\|/g, '*');
    const n = road.replace(/S[\.\*]/, `${d}S`);
    if (n != road) {
      curr++;
      d = road[curr];
    }
    road = n;
    moves.push(road);
  }

  return moves;
}

export { cyberReindeer };
