import InputLoader from '../src/input-loader.js';

const sample = `5 5
1 2
1 0
2 2
2 3
NNESEESWNWW`;

describe('input loader', () => {
  test('it should load data from input.txt', () => {
    const loader = new InputLoader();
    expect(loader.data).toEqual(sample);
  });
});
