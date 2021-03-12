function missingNumbers(input) {
  const missing = [];
  for (let i = 1; i < input.length; i++) {
    const diff = input[i] - input[i - 1];
    if (diff > 1) {
      for (let j = 1; j < diff; j++) {
        missing.push(input[i - 1] + j);
      }
    }
  }
  return missing;
}

console.log(missingNumbers([-3, -2, 1, 5]));
