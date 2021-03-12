function misspelled(a, b) {
  let mismatch = 0;
  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) {
      mismatch++;
    }
  }
  return mismatch <= 1;
}

console.log(misspelled('Haus', 'Haus')); // true
console.log(misspelled('Haus', 'Hau5')); // true
console.log(misspelled('Haus', 'Katze'));
