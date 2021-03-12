function leapYear(year) {
  if (year % 400 === 0) {
    return true;
  }

  if (year % 100 === 0) {
    return false;
  }

  if (year % 4 === 0) {
    return true;
  }

  return false;
}

console.log('2012: ', leapYear(2012));
console.log('2015: ', leapYear(2015));
