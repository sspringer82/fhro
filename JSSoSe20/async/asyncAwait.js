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

(async () => {
  try {
    const result = await myAsyncFunc(true);
    console.log(result);
  } catch (e) {
    console.log('error', e);
  }
})();

// im Browserkontext:
async function getDataFromServer() {
  // mit regulären promises
  // fetch('/users')
  //   .then((response) => response.json())
  //   .then((data) => console.log('data: ', data));
  // console.log('xxx'); // ausgabe: xxx -> data: <data from server>

  const response = await fetch('/users');
  const data = await response.json();
  console.log('data: ', data);

  return data;
}

getDataFromServer().then((data) => console.log(data));
