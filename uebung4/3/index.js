function isUpperCase(str) {
  for (let i = 0; i < str.length; i++) {
    if (str.charCodeAt(i) > 90) {
      return false;
    }
  }
  return true;
}

function isUpperCase2(str) {
    return this.toString() === this.toUpperCase();
}