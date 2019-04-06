import App from '../src/app.js';

const expectedOutput = `1 3
1`;

describe('app integration test', () => {
  test('check expected output', () => {
    let app = new App();
    expect(app.output()).toBe(expectedOutput);
  });
});
