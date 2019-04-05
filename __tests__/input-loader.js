import InputLoader from '../src/input-loader.js';

const sample = `5 5
1 2
1 0
2 2
2 3
NNESEESWNWW`;

const sampleOutput = {
  columns: 5,
  rows: 5,
  position: { x: 1, y: 2 },
  dirt: [{ x: 1, y: 0 }, { x: 2, y: 2 }, { x: 2, y: 3 }],
  drivingInstructions: ['N', 'N', 'E', 'S', 'E', 'E', 'S', 'W', 'N', 'W', 'W']
};

const sampleNoDirt = `5 5
1 2
NNESEESWNWW`;

const sampleOutputNoDirt = {
  columns: 5,
  rows: 5,
  position: { x: 1, y: 2 },
  dirt: [],
  drivingInstructions: ['N', 'N', 'E', 'S', 'E', 'E', 'S', 'W', 'N', 'W', 'W']
};

describe('input loader', () => {
  test('load data from input.txt', () => {
    const loader = new InputLoader();
    expect(loader.data).toEqual(sample);
  });

  test('take data as argument', () => {
    const loader = new InputLoader(sampleNoDirt);
    expect(loader.data).toEqual(sampleNoDirt);
  });

  test('expected output for no dirt sample data', () => {
    const loader = new InputLoader(sampleNoDirt);
    expect(loader.output()).toEqual(sampleOutputNoDirt);
  });

  test('expected output for sample data', () => {
    const loader = new InputLoader(sample);
    expect(loader.output()).toEqual(sampleOutput);
  });
});
