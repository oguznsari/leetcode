function frequencySort(s: string): string {
  let frequencyCounter: { [key: string]: number } = {};

  for (let letter of s) {
    frequencyCounter[letter] = (frequencyCounter[letter] || 0) + 1;
  }

  let sortedChars = "";
  Object.keys(frequencyCounter)
    .sort((a, b) => frequencyCounter[b] - frequencyCounter[a])
    .forEach((char) => {
      for (let i = 0; i < frequencyCounter[char]; i++) {
        sortedChars += char;
      }
    });

  return sortedChars;
}

console.log(frequencySort("tree"), "eetr");
