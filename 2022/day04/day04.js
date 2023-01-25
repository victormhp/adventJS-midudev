function fitsInOneBox(boxes) {
  return boxes
    .sort((a, b) => a.l - b.l)
    .every((box, i) => {
      if (i == boxes.length - 1) return true;
      return box.l < boxes[i + 1].l && box.w < boxes[i + 1].w && box.h < boxes[i + 1].h;
    });
}

export { fitsInOneBox };
