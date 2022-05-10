function doSomething(timeout = 1000, success = true) {
  const value = 'Hallo Welt';
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (success) {
        resolve(value);
      } else {
        reject('Error');
      }
    }, timeout);
  });
}

const result = doSomething();
console.log(result);
result.then((value) => {
  console.log(value);
});

// pyramide
doSomething(/*1000, false*/)
  .then((value) => {
    console.log('v1', value);
    return doSomething();
  })
  .then((value) => {
    console.log('v2', value);
    return doSomething();
  })
  .then((value) => {
    console.log('v3', value);
  })
  .catch((e) => {
    console.error('Whoops');
  });

Promise.all([
  doSomething(10, true),
  doSomething(100, true),
  doSomething(1000, true),
]).then((v) => console.log('erst weiter wenn alle erfolgreich da sind', v));

Promise.allSettled([
  doSomething(10, true),
  doSomething(100, false),
  doSomething(1000, true),
]).then((v) =>
  console.log('erst weiter wenn alle da sind egal ob erfolgreich oder nicht', v)
);

Promise.race([
  doSomething(10, true),
  doSomething(100, true),
  doSomething(1000, true),
]).then((v) => console.log('weiter wenn die erste da ist', v));

const success = Promise.resolve();
const fail = Promise.reject();
