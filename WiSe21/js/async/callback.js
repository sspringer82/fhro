function doItWithCallback(cb, value, error = false) {
  setTimeout(function () {
    const result = value;
    const cbError = error ? new Error('Whoops') : null;
    cb(cbError, result);
  }, 1000);
}

console.log('before');
doItWithCallback(function (error, value) {
  const result = value + 5;
  console.log(result);
}, 3);
console.log('after');

doItWithCallback(function (error, v1) {
  console.log('v1: ', v1);
  doItWithCallback(function (error, v2) {
    console.log('v2: ', v2);
    doItWithCallback(function (error, v3) {
      console.log('v3: ', v3);
      doItWithCallback(function (error, v4) {
        console.log('v4: ', v4);
      }, 6);
    }, 5);
  }, 4);
}, 3);

// try {
doItWithCallback(
  function (error, v5) {
    if (error) {
      console.log(error);
    }
    console.log(v5);
  },
  42,
  true,
);
// } catch (e) {
//   console.log('error: ', e);
// }
