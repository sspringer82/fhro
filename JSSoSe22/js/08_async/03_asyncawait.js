function doSomething(timeout = 1000, success = true) {
  const value = 'Hallo Welt';
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (success) {
        resolve(value);
      } else {
        reject(new Error('Oh no! 🤌'));
      }
    }, timeout);
  });
}

// toplevel await
try {
  const v1 = await doSomething();
  console.log('v1', v1);
  const v2 = await doSomething(1000, false);
  console.log('v2', v2);
  const v3 = await doSomething();
  console.log('v3', v3);
} catch (e) {
  console.error(e.message);
}

// await in funktionen
/*(function() {
  const v1 = await doSomething(); - SyntaxError: Unexpected reserved word
  console.log('v1', v1);
})();*/

// in Funktionen await immer mit async kombinieren
(async function () {
  const v1 = await doSomething();
  console.log('v1', v1);
})();

// async functions geben IMMER promises zurück
async function myAsyncFunc() {
  const result = await doSomething();
  return result;
}
myAsyncFunc().then((value) => console.log(value));

async function add(a, b) {
  return a + b;
}

const result = add(1, 2);
result.then((v) => console.log(v));
