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
    test('room should have correct number of rows', () => {
      let roomba = new Roomba(sample);
      expect(roomba.room.length).toEqual(sample.rows);
    });

    test('room should have correct number of columns', () => {
      let roomba = new Roomba(sample);
      roomba.room.forEach(row => {
        expect(row.length).toEqual(sample.columns);
      });
    });
  });
});
