function checkIsValidCopy(original, copy) {
  if (original.length !== copy.length) return false;

  const degradations = {
    '#': 1,
    '+': 2,
    ':': 3,
    '.': 4,
    ' ': 5,
  };

  for (let i = 0; i < original.length; i++) {
    const char = original[i];
    const copyChar = copy[i];

    // Char codes A-Z = 65-90
    // Char codes a-z = 97-122
    const letters = /[a-zA-Z]/;
    const charCodeDiff = copyChar.charCodeAt(0) - char.charCodeAt(0);
    if (
      (letters.test(char) && letters.test(copyChar)) &&
      (
        char.toLowerCase() !== copyChar.toLowerCase() || 
        (charCodeDiff > 32 || charCodeDiff == -32)
      ) ||
      degradations[char] > degradations[copyChar]
    ) {
      return false;
    }
  }

  return true;
}

export { checkIsValidCopy };
