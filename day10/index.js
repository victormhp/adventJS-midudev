function checkJump(heights) {
    const max = Math.max(...heights)
    const before = heights.slice(0, heights.indexOf(max))
    const after = heights.slice(heights.indexOf(max) + 1)
  
    if (before.length && after.length) {
        const p1 = before.every((e, i, arr) => !i || e >= arr[i-1])
        const p2 = after.every((e, i, arr) => !i || e <= arr[i-1])
      
        return p1 && p2
    }
  
    return false
}