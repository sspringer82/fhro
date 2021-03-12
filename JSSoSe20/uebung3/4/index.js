function reverse(str) {
  return str
    .split(' ')
    .reverse()
    .join(' ');
}

console.log(reverse('the quick brown fox jumps over the lazy dog'));
