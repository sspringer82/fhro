import Calc from './calc';

describe('Calc', () => {
  let calc: Calc;
  beforeEach(() => {
    // Arrange
    calc = new Calc();
  });
  describe('add', () => {
    it('should add 1 and 1 and return 2', () => {
      // Tripple A

      // Act
      const result = calc.add(1, 1);

      // Assert
      expect(result).toBe(2);
    });

    it('should add 2 and 2 and return 4', () => {
      const result = calc.add(2, 2);
      expect(result).toBe(4);
    });

    it('should throw an exception if a string is provided', () => {
      const fn = () => calc.add('2' as any, 1);
      expect(fn).toThrow();
      expect(fn).toThrowError('Not a number');
    });
  });
  describe('sub', () => {
    it('should subtract 2 from 4 and return 2', () => {
      const result = calc.sub(4, 2);
      expect(result).toBe(2);
    });
    it('should blabla', () => {
      const result = calc.sub(1, 1);
      expect(result).not.toBe(1);
    });
  });

  describe('async add', () => {
    it('should add 1 + 1', (done) => {
      calc.asyncAdd(1, 1).then((result) => {
        expect(result).toBe(2);
        done();
      });
    });

    it('should add 1 + 1 second way', async () => {
      jest.useFakeTimers();
      const promise = calc.asyncAdd(1, 1);
      jest.runAllTimers();
      const result = await promise;

      expect(result).toBe(2);
    });
  });
});
