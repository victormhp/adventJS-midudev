function getIndexsForPalindrome(word) {
  if (word === [...word].reverse().join('')) return [];

  for (let i = 0; i < word.length; i++) {
    for (let j = i + 1; j < word.length; j++) {
      let arr = [...word];
      [arr[i], arr[j]] = [arr[j], arr[i]];
      if (arr.join('') === arr.reverse().join('')) return [i, j];
    }
  }

  return null;
}

export { getIndexsForPalindrome };
