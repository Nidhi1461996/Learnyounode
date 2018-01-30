const accessDirAsync = require('./makeItModular');
const printToConsole = require('./module');

global.console = {
  warn: jest.fn(),
  log: jest.fn(),
};

describe('Tests for checking the logging module which logs files in a directory with format filter', () => {
  test('Verify error code returned for no directory found', (done) => {
    const callback = (error, data) => {
      expect(global.console.log).toHaveBeenCalledWith('ENOENT');
      done();
    };
    printToConsole('/Users/nidhijagadeesha/Downloads/McKinsey_Training/Node', 'json', callback);
  });
  test('Verify return value for directory containing the required type of file', (done) => {
    const callback = (error, data) => {
      expect(global.console.log).toHaveBeenCalledWith(['package-lock.json', 'package.json'].toString());
      done();
    };
    printToConsole('/Users/nidhijagadeesha/Documents/McKinsey_Training/Node', 'json', callback);
  });
  test('Verify return value for directory not containing the required type of file', (done) => {
    const callback = (error, data) => {
      expect(global.console.log).toHaveBeenCalledWith('');
      done();
    };
    printToConsole('/Users/nidhijagadeesha/Documents/McKinsey_Training/Node', 'txt', callback);
  });
});

describe('Tests for checking the files retrieval module returns files in a directory with format filter', () => {
  test('Verify error code returned for no directory found', (done) => {
    const callback = (error, data) => {
      expect(error.code).toMatch('ENOENT');
      done();
    };
    accessDirAsync('/Users/nidhijagadeesha/Downloads/learnyounod', 'json', callback);
  });
  test('Verify return value for directory containing the required type of file', (done) => {
    const callback = (error, data) => {
      expect(data).toEqual(['package-lock.json', 'package.json']);
      done();
    };
    accessDirAsync('/Users/nidhijagadeesha/Documents/McKinsey_Training/Node', 'json', callback);
  });
  test('Verify return value for directory not containing the required type of file', (done) => {
    const callback = (error, data) => {
      expect(data).toEqual([]);
      done();
    };
    accessDirAsync('/Users/nidhijagadeesha/Documents/McKinsey_Training/Node', 'txt', callback);
  });
});
