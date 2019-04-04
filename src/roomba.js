const initialiseRoom = (columns, rows) => {
  let room = [];
  for (let i = 1; i <= columns; i++) {
    room.push(Array.from({ length: rows }, () => false));
  }
  return room;
};

export default class Roomba {
  constructor(initialState) {
    Object.assign(this, initialState);
    this.room = initialiseRoom(this.columns, this.rows);
    this.dirt.forEach(dirt => {
      this.room[dirt[0]][dirt[1]] = true;
    });
  }
}
