document.addEventListener('DOMContentLoaded', async () => {
  debugger;
  const body = document.querySelector('body');

  const data = await getDataFromServer();

  createUserList(data, body);
});

async function getDataFromServer() {
  // fetch('http://localhost:3001/users')
  //   .then((response) => {
  //     return response.json();
  //   })
  //   .then((data) => {
  //     console.log(data);
  //   });

  const response = await fetch('http://localhost:3001/users');
  const data = await response.json();
  return data;
}

function createUserList(data, body) {
  const list = document.createElement('ul');

  if (Array.isArray(data)) {
    const userNodes = data.map((user) => createUser(user));

    userNodes.forEach((node) => {
      list.appendChild(node);
    });
  }

  body.appendChild(list);
}

function createUser(user) {
  const li = document.createElement('li');
  // li.innerText = user.name;
  li.innerHTML = `<span>${user.name}</span> <span>(${user.age})</span>`;
  return li;
}
