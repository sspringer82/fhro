// callbacks

function doAsync(cb) {
  const value = 'Hallo Welt';
  setTimeout(() => {
    return cb(value);
  }, 1000);
}

console.log(1); // 1
function callbackFn(callbackValue) {
  console.log(callbackValue); // Hallo Welt
}
doAsync(callbackFn);
console.log(2); // 2

doAsync((v) => {
  console.log(v);
  doAsync((v2) => {
    console.log(v2);
    doAsync((v3) => {
      console.log(v3);
    });
  });
});

// Promises
function doAsyncWPromises() {
  const value = 'Promises!!!';
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(value);
    }, 1000);
  });
}

console.log('a');
const p = doAsyncWPromises();
p.then((promiseValue) => {
  console.log(promiseValue); // Promises!!!
});
console.log('b');

doAsyncWPromises()
  .then(
    (promiseValue) => {
      console.log(promiseValue);
      return doAsyncWPromises();
    },
    // fehlerbehandlung
    (e) => {
      console.error(e);
    },
  )
  .then((promiseValue) => {
    console.log(promiseValue);
    return doAsyncWPromises();
  })
  .then((promiseValue) => {
    console.log(promiseValue);
    return doAsyncWPromises();
  })
  .then((promiseValue) => {
    console.log(promiseValue);
    return doAsyncWPromises();
  })
  .catch((e) => {
    console.error(e);
  });

// Async/Await
const v1 = await doAsyncWPromises();
console.log(v1);
const v2 = await doAsyncWPromises();
console.log(v2);
const v3 = await doAsyncWPromises();
console.log(v3);
const v4 = await doAsyncWPromises();
console.log(v4);

async function doSomethingAsync() {
  const result = await doAsyncWPromises();
  console.log('async/await', result);
}
const returnOfAsync = doSomethingAsync();
console.log(returnOfAsync);

async function add(a, b) {
  return a + b;
}
const resultAdd = add(1, 2);
resultAdd.then((result) => console.log(result));
