const helloWorld = require('./helloWorld');

test('test if the function is returning', () => {
  expect(helloWorld()).toBe('HELLO WORLD');
});
