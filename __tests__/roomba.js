import Roomba from '../src/roomba.js';

const sample = {
  columns: 5,
  rows: 5,
  startPos: [1, 2],
  dirt: [[1, 0], [2, 2], [2, 3]],
  drivingInstructions: ['N', 'N', 'E', 'S', 'E', 'E', 'S', 'W', 'N', 'W', 'W']
};

describe('roomba', () => {
  describe('#constructor', () => {
    let roomba;

    beforeAll(() => {
      roomba = new Roomba(sample);
    });

    test('room should have correct number of columns', () => {
      expect(roomba.room.length).toEqual(sample.columns);
    });

    test('room should have correct number of rows', () => {
      console.log(roomba.room);
      roomba.room.forEach(column => {
        expect(column.length).toEqual(sample.rows);
      });
    });

    test('dirt should be placed correctly', () => {
      roomba.room.forEach((row, y) => {
        roomba.room.forEach((col, x) => {
          //console.log(`x: ${x}, y: ${y}`);
          expect(roomba.room[x][y]).toBe(
            sample.dirt.some(dirt => {
              return dirt[0] === x && dirt[1] === y;
            })
          );
        });
      });
    });
  });
});
