function getMaxGifts(giftsCities, maxGifts, maxCities) {
    return giftsCities
    .sort((a, b) => b - a)
    .reduce((total, num) => {
        if (!maxCities || total + num > maxGifts || total + num === maxGifts - 1) return total 
        maxCities -= 1
        return (total += num)
    }, 0);
}

console.log(getMaxGifts([12, 3, 11, 5, 7], 20, 3))
