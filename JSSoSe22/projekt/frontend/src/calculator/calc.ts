export default class Calc {
  add(a: number, b: number): number {
    // error handling
    if (typeof a !== 'number' || typeof b !== 'number') {
      throw new Error('Not a number');
    }
    return a + b;
  }

  sub(a: number, b: number): number {
    return a - b;
  }

  asyncAdd(a: number, b: number) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.add(a, b));
      }, 3000);
    });
  }
}
