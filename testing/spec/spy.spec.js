it('should call the callback with "hello"', () => {
  const myCallback = jasmine.createSpy('callback');

  function greet(cb) {
    cb('hello');
  }

  greet(myCallback);

  expect(myCallback).toHaveBeenCalledWith('hello');
});

it('should work with random numbers', () => {
  //spyOn(Math, 'random').and.callThrough(); // simple spy that calls through
  spyOn(Math, 'random').and.returnValue(0.2);

  function doSomethingRandom() {
    return Math.random();
  }

  const random = doSomethingRandom();

  expect(random).toBe(0.2);
});
