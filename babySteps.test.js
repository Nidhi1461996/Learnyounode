const babySteps = require('./babySteps');

describe('Testing all possible valid inputs', () => {
  
  test('All positive numbers', () =>{
    expect(babySteps(['1','2','3'])).toBe(6);
  });
  test('All negative numbers', () =>{
    expect(babySteps(['-1','-2','-3'])).toBe(-6);
  });

  test('With both positive and negative inputs', () => {
    expect(babySteps(['1','2','-3'])).toBe(0);
  });

  test('With all 0s', () => {
    expect(babySteps(['0','0','0'])).toBe(0);
  });

  test('check if a number is returned', () => {
    expect(typeof babySteps(['1','2','-3'])).toBe('number');
  });

  test('With no input', () => {
    expect(babySteps([])).toBe(null);
  });
});
