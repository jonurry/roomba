"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _fs = _interopRequireDefault(require("fs"));

var _path = _interopRequireDefault(require("path"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const INPUT_FILE = _path.default.join(__dirname, '.', 'input.txt');

const makeCoordinates = (x, y) => {
  return {
    x: Number(x),
    y: Number(y)
  };
};

const getColumns = data => {
  // first number in first item of data array
  return Number(data[0].split(' ')[0]);
};

const getDirt = data => {
  let dirt = [];

  for (let i = 2; i < data.length - 1; i++) {
    const pos = data[i].split(' ');
    dirt.push(makeCoordinates(pos[0], pos[1]));
  }

  return dirt;
};

const getDrivingInstructions = data => {
  // last item in data array converted to an array
  return Array.from(data[data.length - 1]);
};

const getInitialPosition = data => {
  // second item in data array converted to coordinates
  const pos = data[1].split(' ');
  return makeCoordinates(pos[0], pos[1]);
};

const getRows = data => {
  // second number in first item of data array
  return Number(data[0].split(' ')[1]);
};

const parse = data => {
  let output = {};
  const a = data.split('\n');
  output['columns'] = getColumns(a);
  output['rows'] = getRows(a);
  output['position'] = getInitialPosition(a);
  output['drivingInstructions'] = getDrivingInstructions(a);
  output['dirt'] = getDirt(a);
  return output;
};

class InputLoader {
  constructor(data) {
    // if instructions are provided then use them,
    // otherwise, read instructions from input file
    this.data = data ? data : _fs.default.readFileSync(INPUT_FILE).toString();
  }

  output() {
    return parse(this.data);
  }

}

exports.default = InputLoader;