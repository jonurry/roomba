import fs from 'fs';
import path from 'path';

const INPUT_FILE = path.join(__dirname, '.', 'input.txt');

const makeCoordinates = (x, y) => {
  return { x: Number(x), y: Number(y) };
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

export default class InputLoader {
  constructor(data) {
    // if instructions are provided then use them,
    // otherwise, read instructions from input file
    this.data = data ? data : fs.readFileSync(INPUT_FILE).toString();
  }

  output() {
    return parse(this.data);
  }
}
