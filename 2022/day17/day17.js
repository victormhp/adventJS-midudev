function carryGifts(gifts, maxWeight) {
  const bags = [];

  gifts.forEach(e => {
    if (e.length > maxWeight) return;

    const fitsInBag = bags.at(-1) && bags.at(-1).replace(/\s/g, '').length + e.length <= maxWeight;
    fitsInBag ? (bags[bags.length - 1] += ` ${e}`) : bags.push(e);
  });

  return bags;
}

export { carryGifts };
