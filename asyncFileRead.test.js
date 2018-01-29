const accessDirAsync = require('./asyncFileRead');

describe('Tests for checking the log of files in a directory with format filter using callback specified', () => {
  test('Verify error codereturned to the console for no directory found', (done) => {
    const callback = (data) => {
      expect(data).toBe('ENOENT');
      done();
    };
    accessDirAsync('/Users/nidhijagadeesha/Downloads/learnyounode', 'json', callback);
  });
  test('Verify return value for directory containing the required type of file', (done) => {
    const callback = (data) => {
      expect(data).toEqual(['package-lock.json', 'package.json']);
      done();
    };
    accessDirAsync('/Users/nidhijagadeesha/Documents/McKinsey_Training/Node', 'json', callback);
  });
  test('Verify return value for directory not containing the required type of file', (done) => {
    const callback = (data) => {
      expect(data).toEqual([]);
      done();
    };
    accessDirAsync('/Users/nidhijagadeesha/Documents/McKinsey_Training/Node', 'txt', callback);
  });
});
