function getOptimalPath(path) {
    return path.reduceRight((acc, curr) => {
        return curr.map((e, i) => {
            return e + Math.min(acc[i], acc[i + 1])
        })
    })[0]
}

console.log(getOptimalPath([[1], [1, 5], [7, 5, 8], [9, 4, 1, 3]]))