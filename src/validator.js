const checkPositiveNumber = (name, value) => {
  if (typeof value === 'number' && value < 0) {
    throw `Validation error, '${name}' must be a positive number. Value passed was ${value}`;
  }
};

export default class Validator {
  check(data) {
    checkPositiveNumber('columns', data.columns);
  }
}
