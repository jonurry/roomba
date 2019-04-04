const validMoves = {
  N: { x: 0, y: 1 },
  E: { x: 1, y: 0 },
  S: { x: 0, y: -1 },
  W: { x: -1, y: 0 }
};

const positionAfterMove = (pos, move) => {
  return { x: pos.x + validMoves[move].x, y: pos.y + validMoves[move].y };
};

const isPositionValid = (pos, columns, rows) => {
  return pos.x > 0 && pos.y > 0 && pos.x <= columns && pos.y <= rows;
};

export default class Roomba {
  constructor(initialState) {
    Object.assign(this, initialState);
  }

  move(direction) {
    const newPos = positionAfterMove(this.position, direction);
    this.position = isPositionValid(newPos, this.columns, this.rows)
      ? newPos
      : this.position;
  }
}
