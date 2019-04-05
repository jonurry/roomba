import fs from 'fs';
import path from 'path';

const INPUT_FILE = path.join(__dirname, '.', 'input.txt');

const makeCoordinates = (x, y) => {
  return { x: Number(x), y: Number(y) };
};

const getColumns = dimensions => {
  // first number in first item of data array
  return Number(dimensions[0].split(' ')[0]);
};

const getDirt = () => {
  return [];
};

const getDrivingInstructions = i => {
  // last item in data array converted to an array
  return Array.from(i[i.length - 1]);
};

const getInitialPosition = xy => {
  // second item in data array converted to coordinates
  const pos = xy[1].split(' ');
  return makeCoordinates(pos[0], pos[1]);
};

const getRows = dimensions => {
  // second number in first item of data array
  return Number(dimensions[0].split(' ')[1]);
};

const parse = data => {
  let output = {};
  const a = data.split('\n');
  output['columns'] = getColumns(a);
  output['rows'] = getRows(a);
  output['position'] = getInitialPosition(a);
  output['drivingInstructions'] = getDrivingInstructions(a);
  output['dirt'] = getDirt();
  return output;
};

export default class InputLoader {
  constructor(data) {
    this.data = data ? data : fs.readFileSync(INPUT_FILE).toString();
  }

  output() {
    return parse(this.data);
  }
}
