import Validator from '../src/validator.js';

describe('validator', () => {
  let validator;

  beforeAll(() => {
    validator = new Validator();
  });

  test('valid input', () => {
    const validSample = {
      columns: 5,
      rows: 5,
      position: { x: 1, y: 2 },
      dirt: [{ x: 1, y: 0 }, { x: 2, y: 2 }, { x: 2, y: 3 }],
      drivingInstructions: ['N', 'N', 'E', 'S', 'E', 'E', 'S', 'W', 'N', 'W']
    };
    expect(() => {
      validator.check(validSample);
    }).not.toThrow();
  });

  test('invalid columns type', () => {
    const invalidColumns = {
      columns: '',
      rows: 5,
      position: { x: 1, y: 2 },
      dirt: [],
      drivingInstructions: []
    };
    expect(() => {
      validator.check(invalidColumns);
    }).toThrow('Validation error, \'columns\' must be a number.');
  });

  test('invalid columns value', () => {
    const invalidColumns = {
      columns: -5,
      rows: 5,
      position: { x: 1, y: 2 },
      dirt: [],
      drivingInstructions: []
    };
    expect(() => {
      validator.check(invalidColumns);
    }).toThrow(
      'Validation error, \'columns\' must be a positive number. Value passed was -5'
    );
  });

  test('invalid rows type', () => {
    const invalidRows = {
      columns: 5,
      rows: [],
      position: { x: 1, y: 2 },
      dirt: [],
      drivingInstructions: []
    };
    expect(() => {
      validator.check(invalidRows);
    }).toThrow('Validation error, \'rows\' must be a number.');
  });

  test('invalid rows value', () => {
    const invalidRows = {
      columns: 5,
      rows: -5,
      position: { x: 1, y: 2 },
      dirt: [],
      drivingInstructions: []
    };
    expect(() => {
      validator.check(invalidRows);
    }).toThrow(
      'Validation error, \'rows\' must be a positive number. Value passed was -5'
    );
  });

  test('invalid position format', () => {
    const invalidPosition = {
      columns: 5,
      rows: 5,
      position: { a: 1, b: 2 },
      dirt: [],
      drivingInstructions: []
    };
    expect(() => {
      validator.check(invalidPosition);
    }).toThrow(
      'Validation error, \'position\' must contain an \'x\' and \'y\' coordinate. Value passed was [object Object]'
    );
  });

  test('invalid position types', () => {
    const invalidPosition = {
      columns: 5,
      rows: 5,
      position: { x: [], y: '2' },
      dirt: [],
      drivingInstructions: []
    };
    expect(() => {
      validator.check(invalidPosition);
    }).toThrow('Validation error, \'position.x\' must be a number.');
  });

  test('invalid position values', () => {
    const invalidPosition = {
      columns: 5,
      rows: 5,
      position: { x: -1, y: 6 },
      dirt: [],
      drivingInstructions: []
    };
    expect(() => {
      validator.check(invalidPosition);
    }).toThrow(
      'Validation error, \'position.x\' must be in the range from 0 to 4 inclusive. Value passed was -1'
    );
  });

  test('invalid dirt coordinates', () => {
    const invalidDirtCoordinates = {
      columns: 5,
      rows: 5,
      position: { x: 1, y: 2 },
      dirt: [{ x: 1, y: 0 }, { x: 2, y: 2 }, { x: 2, y: -3 }],
      drivingInstructions: []
    };
    expect(() => {
      validator.check(invalidDirtCoordinates);
    }).toThrow(
      'Validation error, \'dirt[2].y\' must be in the range from 0 to 4 inclusive. Value passed was -3'
    );
  });

  test('invalid dirt type', () => {
    const invalidDirtType = {
      columns: 5,
      rows: 5,
      position: { x: 1, y: 2 },
      dirt: '',
      drivingInstructions: []
    };
    expect(() => {
      validator.check(invalidDirtType);
    }).toThrow('Validation error, \'dirt\' must be an Array.');
  });

  test('invalid driving instruction type', () => {
    const invalidDirtType = {
      columns: 5,
      rows: 5,
      position: { x: 1, y: 2 },
      dirt: [],
      drivingInstructions: 0
    };
    expect(() => {
      validator.check(invalidDirtType);
    }).toThrow('Validation error, \'drivingInstructions\' must be an Array.');
  });

  test('invalid driving instruction values', () => {
    const invalidDirtType = {
      columns: 5,
      rows: 5,
      position: { x: 1, y: 2 },
      dirt: [],
      drivingInstructions: ['N', 'E', 'Q', 'S']
    };
    expect(() => {
      validator.check(invalidDirtType);
    }).toThrow(
      'Validation error, \'drivingInstructions[2]\' must be composed of N, E, S, W.'
    );
  });
});
