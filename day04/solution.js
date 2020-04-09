const crypto = require('crypto');

const input = 'iwrupvqb';

const patternPart1 = '00000';
const patternPart2 = '000000';

function solution(pattern) {
  let i = 1;
  let found = false;

  while (!found) {
    const hashed = crypto
      .createHash('md5')
      .update(`${input}${i}`)
      .digest('hex');
    if (hashed.startsWith(pattern)) found = true;
    i += 1;
  }

  console.log(i - 1); // since it was already incremented in the loop
}

solution(patternPart1);
solution(patternPart2);
