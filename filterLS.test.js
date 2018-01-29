const accessFileAsync = require('./filterLS');

describe('Tests for checking the log of newline characters by the function that reads the contents of the file using callback specified', () => {
  test('Verify error code written to the console for no file found', (done) => {
    const callback = (data) => {
      expect(data).toBe('ENOENT');
      done();
    };
    accessFileAsync('/Users/nidhijagadeesha/Documents/McKinsey_Training/Node/testMe.txt', callback);
  });
  test('Verify return value for file with no newline characters', (done) => {
    const callback = (data) => {
      expect(data).toBe(0);
      done();
    };
    accessFileAsync('/Users/nidhijagadeesha/Documents/McKinsey_Training/Node/My\ First\ IO!/emptyfile', callback);
  });
  test('Verify return value for file with 5 newline characters', (done) => {
    const callback = (data) => {
      expect(data).toBe(4);
      done();
    };
    accessFileAsync('/Users/nidhijagadeesha/Documents/McKinsey_Training/Node/My\ First\ IO!/baseCase', callback);
  });
});
