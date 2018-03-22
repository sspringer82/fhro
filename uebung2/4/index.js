function removeSmallest(input) {
  if (input.length === 0) {
    return input;
  }
  const sortedInput = input.slice().sort((a, b) => {
    if (a > b) {
      return 1;
    } else if (a < b) {
      return -1;
    }
    return 0;
  });
  const smallest = sortedInput[0];
  input.splice(input.indexOf(smallest), 1);
  return input;
}

console.log(removeSmallest([5, 3, 2, 1, 4]));
