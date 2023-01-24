function checkJump(heights) {
    const max = heights.indexOf(Math.max(...heights))
    const before = heights.slice(0, max)
    const after = heights.slice(max + 1)
  
    const isAtMiddle = ![0, heights.length -1].includes(max)
    const isBeforeSorted = before.every((e, i, arr) => !i || e >= arr[i-1])
    const isAfterSorteed = after.every((e, i, arr) => !i || e <= arr[i-1])
      
    return isAtMiddle && isBeforeSorted && isAfterSorteed
}