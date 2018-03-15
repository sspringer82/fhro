function isSquare(arr) {
  if (arr.length === 0) {
    return undefined;
  }
  return arr.every(e => Math.sqrt(e) % 1 === 0);
}

console.log(isSquare([1, 4, 9, 16]));
console.log(isSquare([3, 4, 7, 9]));
console.log(isSquare([]));
