function fitsInOneBox(boxes) {
    boxes.sort((a, b) => a.l - b.l)
    
    return boxes.every((box, i) => {
        if (i === boxes.length - 1) return true
        const nextBox = boxes[i + 1]
        const check = box.l < nextBox.l && box.w < nextBox.w && box.h < nextBox.h
        return check
    })
}
