function checkPart(part) {
    const words = [...part].map((_, i) => 
        part.substring(0, i) + part.substring(i+1)
    )
    words.unshift(part)

    return words.some(e => e === e.split('').reverse('').join(''))
}
