"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
const validDrivingInstructions = ['N', 'E', 'S', 'W'];

const checkArrayType = (name, value) => {
  if (Array.isArray(value) === false) {
    throw `Validation error, '${name}' must be an Array.`;
  }
};

const checkCoordinates = (name, value, maxX, maxY) => {
  if (value['x'] === undefined || value['y'] === undefined) {
    throw `Validation error, '${name}' must contain an 'x' and 'y' coordinate. Value passed was ${value}`;
  }

  checkWrongType(`${name}.x`, value.x, 'number');
  checkWrongType(`${name}.y`, value.y, 'number');
  checkNumberRange(`${name}.x`, value.x, 0, maxX - 1);
  checkNumberRange(`${name}.y`, value.y, 0, maxY - 1);
};

const checkCoordinatesArray = (name, value, maxX, maxY) => {
  checkArrayType(name, value);
  value.forEach((pos, i) => {
    checkCoordinates(`${name}[${i}]`, pos, maxX, maxY);
  });
};

const checkPositiveNumber = (name, value) => {
  if (typeof value === 'number' && value < 0) {
    throw `Validation error, '${name}' must be a positive number. Value passed was ${value}`;
  }
};

const checkNumberRange = (name, value, min, max) => {
  if (value < min || value > max) {
    throw `Validation error, '${name}' must be in the range from ${min} to ${max} inclusive. Value passed was ${value}`;
  }
};

const checkValidValuesArray = (name, value, validValues) => {
  value.forEach((dir, i) => {
    if (!validValues.includes(dir)) {
      throw `Validation error, '${name}[${i}]' must be composed of ${validValues.join(', ')}.`;
    }
  });
};

const checkWrongType = (name, value, type) => {
  if (typeof value != type) {
    throw `Validation error, '${name}' must be a ${type}.`;
  }
};

class Validator {
  check(data) {
    checkWrongType('columns', data.columns, 'number');
    checkPositiveNumber('columns', data.columns);
    checkWrongType('rows', data.rows, 'number');
    checkPositiveNumber('rows', data.rows);
    checkCoordinates('position', data.position, data.columns, data.rows);
    checkCoordinatesArray('dirt', data.dirt, data.columns, data.rows);
    checkArrayType('drivingInstructions', data.drivingInstructions);
    checkValidValuesArray('drivingInstructions', data.drivingInstructions, validDrivingInstructions);
  }

}

exports.default = Validator;