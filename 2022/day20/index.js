function howManyReindeers(reindeerTypes, gifts) {
  return gifts.reduce((acc, curr) => {
    const giftWeight = curr.weight;
    const country = curr.country;

    const validReindeers = reindeerTypes
      .filter(({ weightCapacity }) => weightCapacity < giftWeight)
      .sort((a, b) => b.weightCapacity - a.weightCapacity);
    const weightsArray = validReindeers.map(e => e.weightCapacity);
    const typesArray = validReindeers.map(e => e.type);

    const sum = arr => arr.reduce((sum, value) => sum + value, 0);

    const getNumbers = (n, array) => {
      return array.reduce((acc, curr, idx, arr) => {
        const nextElements = arr.slice(idx + 1);
        let count = 1;

        n -= curr;
        for (let i = 1; n >= curr + sum(nextElements) * (i + 1); i++) {
          count += 1;
          n -= curr;
        }

        acc.push(count);
        return acc;
      }, []);
    };

    const nums = getNumbers(giftWeight, weightsArray);

    acc.push({
      country: country,
      reindeers: typesArray.map((type, i) => ({
        type,
        num: nums[i],
      })),
    });

    return acc;
  }, []);
}
