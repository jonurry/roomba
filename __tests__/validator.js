import Validator from '../src/validator.js';

const validSample = {
  columns: 5,
  rows: 5,
  position: { x: 1, y: 2 },
  dirt: [{ x: 1, y: 0 }, { x: 2, y: 2 }, { x: 2, y: 3 }],
  drivingInstructions: ['N', 'N', 'E', 'S', 'E', 'E', 'S', 'W', 'N', 'W', 'W']
};

describe('validator', () => {
  test('valid input', () => {
    const validator = new Validator();
    expect(() => {
      validator.check(validSample);
    }).not.toThrow();
  });
});
