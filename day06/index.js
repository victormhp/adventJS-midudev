function createCube(size) {
    let cube = ''

    for (let i = 1; i <= size; i++) {
      cube += ' '.repeat(size - i) + '/\\'.repeat(i) + '_\\'.repeat(size) + '\n'
    }

    for (let i = 1; i <= size; i++) {
      cube += ' '.repeat(i - 1) + '\\/'.repeat(size - i + 1) + '_/'.repeat(size) + '\n'
    }

    return cube.trimEnd()
}

