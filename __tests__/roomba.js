import Roomba from '../src/roomba.js';

const sample = {
  columns: 5,
  rows: 5,
  position: { x: 1, y: 2 },
  dirt: [{ x: 1, y: 0 }, { x: 2, y: 2 }, { x: 2, y: 3 }],
  drivingInstructions: ['N', 'N', 'E', 'S', 'E', 'E', 'S', 'W', 'N', 'W', 'W']
};

const positionsEqual = (pos1, pos2) => {
  return pos1.x === pos2.x && pos1.y === pos2.y;
};

describe('roomba', () => {
  describe('#constructor', () => {
    let roomba;

    beforeAll(() => {
      roomba = new Roomba(sample);
    });

    test('room should have correct number of columns', () => {
      expect(roomba.columns).toEqual(sample.columns);
    });

    test('room should have correct number of rows', () => {
      expect(roomba.rows).toEqual(sample.rows);
    });

    test('dirt should be placed correctly', () => {
      sample.dirt.forEach((pos, i) => {
        expect(positionsEqual(roomba.dirt[i], pos)).toBe(true);
      });
    });

    test('driving instructions should be set correctly', () => {
      sample.drivingInstructions.forEach((direction, i) => {
        expect(roomba.drivingInstructions[i]).toBe(direction);
      });
    });
  });
});
