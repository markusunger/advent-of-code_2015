const fs = require('fs');

const input = fs.readFileSync('input.txt', 'utf8').split('');

(function solutionPart1() {
  const result = input
    .reduce((floor, instr) => {
      const direction = instr === '(' ? 1 : -1;
      return floor + direction;
    }, 0);
  console.log(`part 1 solution: ${result}`);
}());

(function solutionPart2() {
  let i = 0;
  let floor = 0;

  while (floor >= 0) {
    const direction = input[i] === '(' ? 1 : -1;
    floor += direction;
    i += 1;
  }

  console.log(`part 2 solution: ${i}`);
}());
