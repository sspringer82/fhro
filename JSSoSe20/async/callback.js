const callback = function (input) {
  console.log('im Callback: ', input);
};

function myAsyncFunc(cb) {
  setTimeout(() => {
    const myMagicalValue = 'Hallo Welt';
    cb(myMagicalValue);
    // return myMagicalValue; - funktioniert nicht
  }, 1000);
}

const result = myAsyncFunc(callback);
console.log(result); // kein Rückgabewert
