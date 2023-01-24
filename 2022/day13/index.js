function getFilesToBackup(lastBackup, changes) {
    const modified = changes.filter(e => e[1] > lastBackup)
    const id = new Set(modified.map(e => e[0]))
    
    return [...id].sort((a, b) => a - b)
}
