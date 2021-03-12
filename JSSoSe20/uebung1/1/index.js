'use strict';

function greatestDiff(arr) {
  let diff = arr.reduce(
    (prev, curr) => {
      let numbers = curr.split('-').map(v => parseInt(v, 10));

      let diff = Math.abs(numbers[1] - numbers[0]);

      return diff > prev.diff ? { value: curr, diff: diff } : prev;
    },
    { value: '', diff: 0 },
  );
  return diff.diff === 0 ? false : diff.value;
}

let gd = greatestDiff(['52-23', '1-100']);
console.log(gd);

function greatestDiff2(arr) {
  var greatest = 0;
  var val = '';

  for (var i = 0; i < arr.length; i++) {
    var numbers = arr[i].split('-');
    var diff = Math.abs(numbers[0] - numbers[1]);
    if (diff > greatest) {
      greatest = diff;
      val = arr[i];
    }
  }

  return val;
}
console.log(greatestDiff2(['52-23', '1-100']));

function greatestDiff3(arr) {
  return arr
    .map(e => {
      let numbers = e.split('-');
      return { val: e, diff: Math.abs(numbers[0] - numbers[1]) };
    })
    .sort((a, b) => {
      a.diff > b.diff ? -1 : 1;
    })
    .pop().val;
}
console.log(greatestDiff3(['52-23', '1-100']));
