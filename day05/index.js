function getMaxGifts(giftsCities, maxGifts, maxCities) {
    return (() =>
    Math.max(
      ...giftsCities
      .sort((a, b) => b - a)
      .reduce((total, i) => (
            i && giftsCities.unshift(giftsCities.pop()),
            (i = giftsCities
              .slice(0, maxCities)
              .reduce((acc, curr) => (acc + curr))),
            i <= maxGifts && total.push(i),
            i - giftsCities[maxCities - 1] <= maxGifts && total.push(i - giftsCities[maxCities - 1]),
            total
            ),
          []
        ),
      0
    ))();
}
