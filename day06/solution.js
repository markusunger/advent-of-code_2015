/* eslint-disable no-unused-vars */
/* eslint-disable no-param-reassign */

const fs = require('fs');

const input = fs.readFileSync('input.txt', 'utf8').split('\n');

(function solutionPart1() {
  const endState = input.reduce((state, instr) => {
    const [_, cmd, c1, c2] = /(turn on|turn off|toggle).*?(\d+,\d+).*?(\d+,\d+)/g.exec(instr);
    const [x1, y1] = c1.split(',').map(Number);
    const [x2, y2] = c2.split(',').map(Number);

    for (let i = x1; i <= x2; i += 1) {
      for (let j = y1; j <= y2; j += 1) {
        const coords = `${i},${j}`;
        if (!state[coords]) state[coords] = false;
        switch (cmd) {
          case 'toggle':
            state[coords] = !state[coords];
            break;
          case 'turn on':
            state[coords] = true;
            break;
          case 'turn off':
            state[coords] = false;
            break;
          default:
            break;
        }
      }
    }
    return state;
  }, {});

  console.log(Object.values(endState).filter(v => v).length);
}());

(function solutionPart2() {
  const endState = input.reduce((state, instr) => {
    const [_, cmd, c1, c2] = /(turn on|turn off|toggle).*?(\d+,\d+).*?(\d+,\d+)/g.exec(instr);
    const [x1, y1] = c1.split(',').map(Number);
    const [x2, y2] = c2.split(',').map(Number);

    for (let i = x1; i <= x2; i += 1) {
      for (let j = y1; j <= y2; j += 1) {
        const coords = `${i},${j}`;
        if (!state[coords]) state[coords] = 0;
        switch (cmd) {
          case 'toggle':
            state[coords] += 2;
            break;
          case 'turn on':
            state[coords] += 1;
            break;
          case 'turn off':
            state[coords] -= 1;
            if (state[coords] < 0) state[coords] = 0;
            break;
          default:
            break;
        }
      }
    }
    return state;
  }, {});

  console.log(Object.values(endState).reduce((total, v) => total + v));
}());
