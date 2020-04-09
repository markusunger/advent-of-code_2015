const fs = require('fs');

const input = fs.readFileSync('input.txt', 'utf8').split('\n');

(function solutionPart1() {
  const checkVowels = (str) => {
    const matches = str.match(/[aeoiu]/g);
    return matches && matches.length >= 3;
  };

  const checkDoubles = (str) => {
    const matches = str.match(/(.)\1/);
    return !!matches;
  };

  const excludesPatterns = (str) => {
    const matches = str.match(/ab|cd|pq|xy/g);
    return !matches;
  };

  const twiceNoOverlap = (str) => {
    const matches = str.match(/(.{2}).*\1/g);
    return !!matches;
  };

  const onceRepeatFixedDistance = (str) => {
    const matches = str.match(/(.).\1/g);
    return !!matches;
  };

  const resultPart1 = input.reduce((count, str) => {
    if (checkVowels(str) && checkDoubles(str) && excludesPatterns(str)) {
      return count + 1;
    }
    return count;
  }, 0);

  const resultPart2 = input.reduce((count, str) => {
    if (twiceNoOverlap(str) && onceRepeatFixedDistance(str)) {
      return count + 1;
    }
    return count;
  }, 0);

  console.log(resultPart1);
  console.log(resultPart2);
}());
