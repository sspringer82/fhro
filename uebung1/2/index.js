function processArray(arr, cb) {
  return arr.map(cb);
}

var myArray = [4, 8, 2, 7, 5];
var result = processArray(myArray, v => v * 2);
console.log(result);

function processArray2(arr, cb) {
  var result = [];
  for (var i = 0; i < arr.length; i++) {
    result.push(cb(arr[i]));
  }
  return arr;
}
var result2 = processArray(myArray, v => v * 2);
console.log(result2);
