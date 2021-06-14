const add = require('./add');

describe('addition', () => {
  it('should add 1 and 1 and return 2', () => {
    const result = add(1, 1);
    expect(result).toBe(2);
  });
  it('should add 1 and 2 and return 3', () => {
    const result = add(1, 2);
    expect(result).toBe(3);
  });
  it('should add 3 and 2 and return 5', () => {
    const result = add(3, 2);
    expect(result).toBe(5);
  });
  it('should throw an execption if a is a string', () => {
    const fn = () => add('1', 2);
    expect(fn).toThrow();
  });
  it('should throw an execption if b is a string', () => {
    const fn = () => add(1, '2');
    expect(fn).toThrow();
  });
});
