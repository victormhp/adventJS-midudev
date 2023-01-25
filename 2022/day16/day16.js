function fixLetter(letter) {
  return letter
    .replace(/(^\s+)|(\s+$)/g, '')
    .replace(/\s+/g, ' ')
    .replace(/,\s*/g, ', ')
    .replace(/\s*[,.?]/g, match => match.slice(-1))
    .replace(/\?+/g, '?')
    .replace(/santa claus/gi, 'Santa Claus')
    .replace(/(^|[.!?]\s+)(\w)/g, match => match.toUpperCase())
    .replace(/^.*\w$/, match => `${match}.`);
}

export { fixLetter };
