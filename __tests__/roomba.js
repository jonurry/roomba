import Roomba from '../src/roomba.js';

const sample = {
  columns: 5,
  rows: 5,
  position: { x: 1, y: 2 },
  dirt: [{ x: 1, y: 0 }, { x: 2, y: 2 }, { x: 2, y: 3 }],
  drivingInstructions: ['N', 'N', 'E', 'S', 'E', 'E', 'S', 'W', 'N', 'W', 'W']
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
        expect(roomba.dirt[i]).toEqual(pos);
      });
    });

    test('driving instructions should be set correctly', () => {
      sample.drivingInstructions.forEach((direction, i) => {
        expect(roomba.drivingInstructions[i]).toBe(direction);
      });
    });
  });

  describe('#move', () => {
    describe('can move freely', () => {
      let roomba;

      beforeEach(() => {
        roomba = new Roomba({
          columns: 3,
          rows: 3,
          position: { x: 1, y: 1 }
        });
      });

      test('can move North', () => {
        roomba.move('N');
        expect(roomba.position).toEqual({ x: 1, y: 2 });
      });

      test('can move East', () => {
        roomba.move('E');
        expect(roomba.position).toEqual({ x: 2, y: 1 });
      });

      test('can move South', () => {
        roomba.move('S');
        expect(roomba.position).toEqual({ x: 1, y: 0 });
      });

      test('can move West', () => {
        roomba.move('W');
        expect(roomba.position).toEqual({ x: 0, y: 1 });
      });
    });

    describe('blocked by walls', () => {
      let roomba;

      beforeEach(() => {
        roomba = new Roomba({
          columns: 1,
          rows: 1,
          position: { x: 0, y: 0 }
        });
      });

      test('cannot move North', () => {
        roomba.move('N');
        expect(roomba.position).toEqual({ x: 0, y: 0 });
      });

      test('cannot move East', () => {
        roomba.move('E');
        expect(roomba.position).toEqual({ x: 0, y: 0 });
      });

      test('cannot move South', () => {
        roomba.move('S');
        expect(roomba.position).toEqual({ x: 0, y: 0 });
      });

      test('cannot move West', () => {
        roomba.move('W');
        expect(roomba.position).toEqual({ x: 0, y: 0 });
      });
    });

    describe('invalid move', () => {
      test('direction is invalid', () => {
        let roomba = new Roomba({
          columns: 1,
          rows: 1,
          position: { x: 0, y: 0 }
        });
        roomba.move('z');
        expect(roomba.position).toEqual({ x: 0, y: 0 });
      });
    });
  });

  describe('#drive', () => {
    let roomba;

    beforeAll(() => {
      roomba = new Roomba(sample);
    });

    test('final position', () => {
      roomba.drive();
      expect(roomba.position).toEqual({ x: 1, y: 3 });
    });
  });
});
