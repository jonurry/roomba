import fs from 'fs';
import path from 'path';

const INPUT_FILE = path.join(__dirname, '.', 'input.txt');

export default class InputLoader {
  constructor(data) {
    this.data = data ? data : fs.readFileSync(INPUT_FILE).toString();
  }
}
