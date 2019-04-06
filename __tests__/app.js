import App from '../src/app.js';

const expectedOutput = `1 3
1`;

describe('app integration test', () => {
  let app;

  beforeAll(() => {
    app = new App();
  });

  test('check expected output', () => {
    expect(app.output()).toBe(expectedOutput);
  });
});
