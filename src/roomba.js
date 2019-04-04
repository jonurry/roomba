const initialiseRoom = (columns, rows) => {
  let room = [];
  for (let i = 1; i <= rows; i++) {
    room.push(Array.from({ length: columns }, () => false));
  }
  return room;
};

export default class Roomba {
  constructor(initialState) {
    Object.assign(this, initialState);
    this.room = initialiseRoom(this.columns, this.rows);
  }
}
