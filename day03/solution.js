/* eslint-disable no-param-reassign */
/* eslint-disable quote-props */
const fs = require('fs');

const input = fs.readFileSync('input.txt', 'utf8').split('');
const DIR = {
  '^': [0, -1],
  '>': [1, 0],
  'v': [0, 1],
  '<': [-1, 0],
};

(function solutionPart1() {
  let current = [0, 0];

  const visited = input.reduce((map, move) => {
    const relativeMove = DIR[move];
    current = [current[0] + relativeMove[0], current[1] + relativeMove[1]];
    if (map[`${current[0]},${current[1]}`]) {
      map[`${current[0]},${current[1]}`] += 1;
    } else {
      map[`${current[0]},${current[1]}`] = 1;
    }
    return map;
  }, {
    '0,0': 1,
  });

  console.log(Object.keys(visited).length);
}());

(function solutionPart2() {
  const current = [
    [0, 0],
    [0, 0],
  ];

  const visited = input.reduce((map, move, idx) => {
    const turn = idx % 2;
    current[turn][0] += DIR[move][0];
    current[turn][1] += DIR[move][1];
    const coord = current[turn].join(',');
    if (!map[coord]) map[coord] = 1;
    return map;
  }, {
    '0,0': 1,
  });

  console.log(Object.keys(visited).length);
}());
