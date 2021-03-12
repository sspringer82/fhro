function sumArray(array) {
  if (!array) return 0;
  const min = Math.min(...array);
  array.splice(array.indexOf(min), 1);
  const max = Math.max(...array);
  array.splice(array.indexOf(max), 1);
  return array.reduce((prev, curr) => prev + curr, 0);
}