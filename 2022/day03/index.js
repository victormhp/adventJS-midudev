function distributeGifts(packOfGifts, reindeers) {
    const giftsWeight = packOfGifts.reduce((a, b)  => a + b.length, 0)
    const reindeersStrength = reindeers.reduce((a, b)  => a + (b.length * 2), 0)

    return Math.floor(reindeersStrength / giftsWeight);
}
