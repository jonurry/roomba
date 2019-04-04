export default class Roomba {
  constructor(initialState) {
    Object.assign(this, initialState);
  }

  move(direction) {
    switch (direction) {
    case 'N':
      this.position.y += 1;
      break;
    case 'E':
      this.position.x += 1;
      break;
    case 'S':
      this.position.y -= 1;
      break;
    case 'W':
      this.position.x -= 1;
      break;
    default:
      break;
    }
  }
}
