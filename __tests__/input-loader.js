import InputLoader from '../src/input-loader.js';

const sample = `5 5
1 2
1 0
2 2
2 3
NNESEESWNWW`;

const noDirtSample = `5 5
1 2
NNESEESWNWW`;

describe('input loader', () => {
  test('load data from input.txt', () => {
    const loader = new InputLoader();
    expect(loader.data).toEqual(sample);
  });

  test('take data as argument', () => {
    const loader = new InputLoader(noDirtSample);
    expect(loader.data).toEqual(noDirtSample);
  });
});
