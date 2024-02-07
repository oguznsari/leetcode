function frequencySort(s) {
    var frequencyCounter = {};
    for (var _i = 0, s_1 = s; _i < s_1.length; _i++) {
        var letter = s_1[_i];
        frequencyCounter[letter] = (frequencyCounter[letter] || 0) + 1;
    }
    var sortedChars = "";
    Object.keys(frequencyCounter)
        .sort(function (a, b) { return frequencyCounter[b] - frequencyCounter[a]; })
        .forEach(function (char) {
        for (var i = 0; i < frequencyCounter[char]; i++) {
            sortedChars += char;
        }
    });
    return sortedChars;
}
console.log(frequencySort("tree"), "eetr");
