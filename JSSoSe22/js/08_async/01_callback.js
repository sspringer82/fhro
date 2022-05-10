function doSomething(cb) {
  const value = 'Hallo Welt';
  setTimeout(() => {
    console.log(value);
    cb(value);
  }, 1000);
}

console.log('1');
function callback(value) {
  console.log('In callback: ', value);
}
doSomething(callback);
console.log('2');

doSomething((v) => {
  console.log('in arrow', v);
});

// voneinander abhängige asynchrone operationen

doSomething((v) => {
  console.log('outer', v);
  doSomething((v2) => {
    console.log('inner', v2);
    doSomething((v3) => {
      console.log('innerinner', v3);
    });
  });
});
