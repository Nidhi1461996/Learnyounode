const firstIO = require('./firstIO');


describe('Testing with different file inputs', () => {
  test('Base case testing ', () => {
    expect(firstIO('My\ First\ IO\!/baseCase')).toBe(4);
  });

  test('With empty file', () => {
    expect(firstIO('My\ First\ IO\!/emptyfile')).toBe(0);
  });

  test('File with numbers ', () => {
    expect(firstIO('My\ First\ IO\!/WithNumbers')).toBe(4);
  });

  test('File with special characters ', () => {
    expect(firstIO('My\ First\ IO\!/SpecialCharacters')).toBe(4);
  });
});
