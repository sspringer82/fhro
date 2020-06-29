describe('Calc', () => {
  let calc;
  beforeEach(() => {
    // vor jedem test
    // Arrange
    calc = new Calc();
  });

  // afterEach(() => {}); // nach jedem test
  // beforeAll(() => {}); // einmal vor allen tests
  // afterAll(() => {}); // einmal nach allen tests
  describe('Calc.add', () => {
    it('should add 1 and 1 and return 2', () => {
      // tripple A
      // Act
      const result = calc.add(1, 1);
      // Assert
      expect(result).toBe(2);
    });

    it('should add 1 and 2 and return 3', () => {
      const result = calc.add(1, 2);
      expect(result).toBe(3);
    });
  });
});
