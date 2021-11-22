import fetch from 'node-fetch';

function talkToServer(url) {
  return new Promise(async (resolve, reject) => {
    const response = await fetch('https://jsonplaceholder.typicode.com/userz');
    console.log(response.status);
    if (!response.ok) {
      reject('Serverkommunikation fehlgeschlagen');
    } else {
      const data = await response.json();
      resolve(data);
    }
  });
}

talkToServer('http://localhost:8080/')
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error(error);
  });
