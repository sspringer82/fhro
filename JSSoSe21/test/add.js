function add(a, b) {
  if (typeof a === 'string' || typeof b === 'string') {
    throw new TypeError();
  }
  return a + b;
}

module.exports = add;
