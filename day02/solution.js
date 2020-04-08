const fs = require('fs');

const input = fs.readFileSync('input.txt', 'utf8').split('\n');

(function solutionPart1() {
  const result = input
    .reduce((total, dimensions) => {
      const [l, w, h] = dimensions.split('x').map(Number);
      const areas = [l * w, w * h, h * l];
      const minArea = areas.reduce((min, area) => (min < area ? min : area));

      const sum = areas.reduce((acc, area) => acc + (2 * area), 0);
      return total + sum + minArea;
    }, 0);
  console.log(result);
}());

(function solutionPart2() {
  const result = input
    .reduce((total, dimensions) => {
      const sides = dimensions.split('x').map(Number).sort((a, b) => a - b);
      const wrapRibbon = 2 * sides[0] + 2 * sides[1];
      const bowRibbon = sides.reduce((product, side) => product * side);
      return total + wrapRibbon + bowRibbon;
    }, 0);
  console.log(result);
}());
