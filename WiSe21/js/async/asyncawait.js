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

async function doIt() {
  const result = await doItWithPromise(1, 100);
  console.log('v1: ', result);
}
doIt();

// top-level await (ohne async function - nur top-level!!!)
const v2 = await doItWithPromise(2, 100);
console.log(v2);

async function doItWithAChain() {
  const v3 = await doItWithPromise(3, 100);
  console.log('v3: ', v3);
  const v4 = await doItWithPromise(4, 100);
  console.log('v4: ', v4);
  try {
    const v5 = await doItWithPromise(5, 100, true);
    console.log('v5: ', v5);
  } catch (e) {
    console.log('error: ', e);
  }
  const v6 = await doItWithPromise(6, 100);
  console.log('v6: ', v6);
  const v7 = await doItWithPromise(7, 100);
  console.log('v7: ', v7);
}
doItWithAChain();

// nicht ganz so sinnvolle Lösung, aber funktioniert
async function doIt22() {
  return await doItWithPromise(22, 100);
}
function doIt33() {
  return doItWithPromise(33, 100);
}
const result = await Promise.allSettled([doIt22(), doIt33()]);
console.log(result);
