import Validator from '../src/validator.js';

const invalidColumns = {
  columns: -5,
  rows: 5,
  position: { x: 1, y: 2 },
  dirt: [{ x: 1, y: 0 }, { x: 2, y: 2 }, { x: 2, y: 3 }],
  drivingInstructions: ['N', 'N', 'E', 'S', 'E', 'E', 'S', 'W', 'N', 'W', 'W']
};

const invalidRows = {
  columns: 5,
  rows: -5,
  position: { x: 1, y: 2 },
  dirt: [{ x: 1, y: 0 }, { x: 2, y: 2 }, { x: 2, y: 3 }],
  drivingInstructions: ['N', 'N', 'E', 'S', 'E', 'E', 'S', 'W', 'N', 'W', 'W']
};

const validSample = {
  columns: 5,
  rows: 5,
  position: { x: 1, y: 2 },
  dirt: [{ x: 1, y: 0 }, { x: 2, y: 2 }, { x: 2, y: 3 }],
  drivingInstructions: ['N', 'N', 'E', 'S', 'E', 'E', 'S', 'W', 'N', 'W', 'W']
};

describe('validator', () => {
  let validator;

  beforeAll(() => {
    validator = new Validator();
  });

  test('valid input', () => {
    expect(() => {
      validator.check(validSample);
    }).not.toThrow();
  });

  test('invalid columns', () => {
    expect(() => {
      validator.check(invalidColumns);
    }).toThrow();
  });

  test('invalid rows', () => {
    expect(() => {
      validator.check(invalidRows);
    }).toThrow();
  });
});
