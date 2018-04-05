function camelCase(str) {
  return str
    .split(' ')
    .map(word => word[0].toUpperCase() + word.substr(1))
    .join('');
}

console.log(camelCase('hello world'));
