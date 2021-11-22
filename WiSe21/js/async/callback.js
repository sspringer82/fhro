function doItWithCallback(cb, value, error = false) {
  setTimeout(function () {
    const result = value;
    cb(result);
  }, 1000);
}

console.log('before');
doItWithCallback(function (value) {
  const result = value + 5;
  console.log(result);
}, 3);
console.log('after');

doItWithCallback(function (v1) {
  console.log('v1: ', v1);
  doItWithCallback(function (v2) {
    console.log('v2: ', v2);
    doItWithCallback(function (v3) {
      console.log('v3: ', v3);
      doItWithCallback(function (v4) {
        console.log('v4: ', v4);
      }, 6);
    }, 5);
  }, 4);
}, 3);
