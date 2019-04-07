"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _validator = _interopRequireDefault(require("./validator.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const validMoves = {
  N: {
    x: 0,
    y: 1
  },
  E: {
    x: 1,
    y: 0
  },
  S: {
    x: 0,
    y: -1
  },
  W: {
    x: -1,
    y: 0
  }
};

const positionAfterMove = (pos, move) => {
  let theMove = validMoves[move];

  if (theMove === undefined) {
    theMove = {
      x: 0,
      y: 0
    };
  }

  return {
    x: pos.x + theMove.x,
    y: pos.y + theMove.y
  };
};

const isPositionValid = (pos, columns, rows) => {
  return pos.x >= 0 && pos.y >= 0 && pos.x < columns && pos.y < rows;
};

class Roomba {
  constructor(initialState, validator = new _validator.default()) {
    Object.assign(this, initialState);
    validator.check(this);
    this.hooveredDirt = 0;
    this.clean();
  }

  clean() {
    const dirtCount = this.dirt.length;
    this.dirt = this.dirt.filter(dirt => {
      return dirt.x !== this.position.x || dirt.y !== this.position.y;
    });
    this.hooveredDirt += dirtCount - this.dirt.length;
  }

  drive() {
    this.drivingInstructions.forEach(direction => {
      this.move(direction);
    });
  }

  move(direction) {
    const newPos = positionAfterMove(this.position, direction);

    if (isPositionValid(newPos, this.columns, this.rows)) {
      this.position = newPos;
    }

    this.clean();
  }

}

exports.default = Roomba;