function myAsyncFunc(fail = false) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const myMagicalValue = 'Hallo Welt';
      if (fail) {
        reject('Whoops');
      } else {
        resolve(myMagicalValue);
      }
    }, 1000);
  });
}

const promiseObj = myAsyncFunc(true);

// promiseObj.then(
//   function success(value) {
//     console.log('success: ', value);
//   },
//   function error(error) {
//     console.log('error: ', error);
//   },
// );

promiseObj
  .then(function success(value) {
    console.log('success: ', value);
  })
  .catch(function error(error) {
    console.log('error: ', error);
  });

// Promise kette - So nicht:
// myAsyncFunc.then((data) => {
//   console.log('first: ', data);
//   myAsyncFunc().then((data) => {
//     console.log('second: ', data);
//   });
// });

// Promise kette - jetzt aber in richtig
myAsyncFunc()
  .then((data) => {
    console.log('first: ', data);
    // return 'whatever';
    return Promise.reject('Fooo!');
  })
  .then((data) => {
    console.log('second: ', data);
    return myAsyncFunc();
  })
  .then((data) => {
    console.log('third: ', data);
  })
  .catch((e) => {
    console.log(e);
  });

// mit promises arbeiten
function add(a, b) {
  // return new Promise((resolve, reject) => resolve(a + b));
  // return a + b;
  return Promise.resolve(a + b);
  // return Promise.reject(a + b);
}
add().then((result) => console.log(result));

// promise.all && promise.race

Promise.all([myAsyncFunc(), myAsyncFunc(), myAsyncFunc()]).then((results) => {
  console.log(results);
});
Promise.race([myAsyncFunc(), myAsyncFunc(), myAsyncFunc()]).then((results) => {
  console.log(results);
});

// Lesbarkeit FTW!
// const readFile = () => fs.read();
// const closeHandle = () => fs.close();
// const fileName = 'myFile';

// fs.open(fileName).then(readFile).then(closeHandle);
