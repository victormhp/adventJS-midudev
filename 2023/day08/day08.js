function organizeGifts(gifts) {
  const giftsArr = gifts.match(/\d+[a-z]/g);
  let chain = '';

  giftsArr.forEach(g => {
    let n = parseInt(g);
    const l = g[g.length - 1];

    const palletes = Math.floor(n / 50);
    n -= 50 * palletes;

    const boxes = Math.floor(n / 10);
    n -= 10 * boxes;

    chain += `[${l}]`.repeat(palletes);
    chain += `{${l}}`.repeat(boxes);
    chain += n ? `(${l.repeat(n)})` : '';
  });
  return chain;
}

export { organizeGifts };
