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

    test('room should contain sample data', () => {
      expect(roomba.columns).toEqual(sample.columns);
      expect(roomba.rows).toEqual(sample.rows);
      expect(roomba.position).toEqual(sample.position);
      expect(roomba.dirt).toEqual(sample.dirt);
      expect(roomba.drivingInstructions).toEqual(sample.drivingInstructions);
    });

    test('hoovered dirt counter should start at zero', () => {
      expect(roomba.hooveredDirt).toBe(0);
    });
  });

  describe('#move', () => {
    describe('can move freely', () => {
      let roomba;

      beforeEach(() => {
        roomba = new Roomba({
          columns: 3,
          rows: 3,
          position: { x: 1, y: 1 },
          dirt: []
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
      const initialPosition = { x: 0, y: 0 };

      beforeEach(() => {
        roomba = new Roomba({
          columns: 1,
          rows: 1,
          position: initialPosition,
          dirt: []
        });
      });

      test('cannot move North', () => {
        roomba.move('N');
        expect(roomba.position).toEqual(initialPosition);
      });

      test('cannot move East', () => {
        roomba.move('E');
        expect(roomba.position).toEqual(initialPosition);
      });

      test('cannot move South', () => {
        roomba.move('S');
        expect(roomba.position).toEqual(initialPosition);
      });

      test('cannot move West', () => {
        roomba.move('W');
        expect(roomba.position).toEqual(initialPosition);
      });
    });

    describe('invalid move', () => {
      test('direction is invalid', () => {
        const initialPosition = { x: 1, y: 1 };
        let roomba = new Roomba({
          columns: 3,
          rows: 3,
          position: initialPosition,
          dirt: []
        });
        roomba.move('z');
        expect(roomba.position).toEqual(initialPosition);
      });
    });
  });

  describe('#drive', () => {
    test('final position', () => {
      let roomba = new Roomba(sample);
      roomba.drive();
      expect(roomba.position).toEqual({ x: 1, y: 3 });
    });
  });

  describe('#clean', () => {
    test('cleaned dirt', () => {
      let roomba = new Roomba(sample);
      roomba.drive();
      expect(roomba.hooveredDirt).toBe(1);
    });

    test('clean floor on initial placement', () => {
      let roomba = new Roomba({
        columns: 1,
        rows: 1,
        position: { x: 0, y: 0 },
        dirt: [{ x: 0, y: 0 }]
      });
      expect(roomba.hooveredDirt).toBe(1);
      expect(roomba.dirt).toEqual([]);
    });
  });
});
