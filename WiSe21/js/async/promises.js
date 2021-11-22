function doItWithPromise(value, timeout, error = false) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      if (error) {
        reject(new Error('whoops'));
      } else {
        resolve(value);
      }
    }, timeout);
  });
}

const promise = doItWithPromise(1, 1000);
promise.then(function (value) {
  console.log('v1: ', value);
});

doItWithPromise(2, 1000, true).then(
  (value) => {
    console.log('v2: ', value);
  },
  (error) => {
    console.error('error: ', error);
  },
);

doItWithPromise(2, 1000, true)
  .then((value) => {
    console.log('v2: ', value);
  })
  .catch((error) => {
    console.error('error: ', error);
  });

doItWithPromise(3, 1000)
  .then((value) => {
    console.log('v3: ', value);
    return doItWithPromise(4, 1000);
  })
  .then((value) => {
    console.log('v4: ', value);
    return doItWithPromise(5, 1000);
  })
  .then((value) => {
    console.log('v5: ', value);
    return 42;
  })
  .then((value) => {
    console.log('v6: ', value);
  });

// weitermachen wenn alle resolved sind
Promise.all([
  doItWithPromise(1, 1000),
  doItWithPromise(2, 1000),
  doItWithPromise(3, 1000),
  doItWithPromise(4, 1000),
  doItWithPromise(5, 1000),
])
  .then((p) => {
    console.log('p: ', p);
  })
  .catch((e) => console.error(e));

// der schnellste gewinnt
Promise.race([
  doItWithPromise(1, 100),
  doItWithPromise(2, 200),
  doItWithPromise(3, 50),
  doItWithPromise(4, 300),
  doItWithPromise(5, 500),
]).then((p) => {
  console.log('p: ', p);
});

// weitermachen wenn alle entweder resolved oder rejected sind
Promise.allSettled([
  doItWithPromise(1, 1000),
  doItWithPromise(2, 1000),
  doItWithPromise(3, 1000, true),
  doItWithPromise(4, 1000),
  doItWithPromise(5, 1000),
]).then((p) => {
  console.log('p: ', p);
});
