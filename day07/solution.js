/* eslint-disable no-bitwise */

const fs = require('fs');

const input = fs.readFileSync('input.txt', 'utf8').split('\n');

(function solutionPart1() {
  const BITWISE = {
    AND: (a, b) => a & b,
    OR: (a, b) => a | b,
    LSHIFT: (a, b) => a << b,
    RSHIFT: (a, b) => a >> b,
    NOT: a => ~a,
  };

  const wires = input.reduce((obj, instr) => {
    const [src, dest] = instr.split(' -> ');
    const args = src.match(/[a-z0-9]+/g);
    const command = src.match(/[A-Z]+/g);

    // eslint-disable-next-line no-param-reassign
    obj[dest] = {
      command,
      args: args.map(arg => (Number.isNaN(parseInt(arg, 10)) ? arg : parseInt(arg, 10))),
    };
    return obj;
  }, {});

  // optional part 2 code
  wires.b = 3176;

  const getWire = (wireName) => {
    const wire = wires[wireName];
    if (typeof wireName === 'number') return wireName;
    if (typeof wire === 'number') return wire;
    if (typeof wire === 'undefined') return 'undefined';

    const [a, b] = wire.args;

    if (!wire.command) {
      wires[wireName] = getWire(a);
    } else {
      wires[wireName] = BITWISE[wire.command](getWire(a), getWire(b));
    }

    return wires[wireName];
  };

  console.log(getWire('a'));
}());
