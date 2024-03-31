export function manufacture(gifts, materials) {
  return gifts.filter(g => {
    return g.split("").every(l => materials.includes(l))
  })
}
