function getGiftsToRefill(a1, a2, a3) {
    const refill = ([a1, a2, a3].map((a, i) => {
        let gifts = [a1, a2, a3]
        gifts.splice(i, 1)

        return a.filter(e => !gifts.flat().includes(e))
    })).flat()

    return Array.from(new Set(refill))
}
