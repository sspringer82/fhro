document.addEventListener('DOMContentLoaded', async () => {
  const request = await fetch('http://localhost:8080/person');
  const data = await request.json();
  data.forEach((person) => createTableRow(person));
});

function createTableRow(data) {
  const tr = document.createElement('tr');
  const firstname = document.createElement('td');
  firstname.innerText = data.firstname;
  tr.appendChild(firstname);
  const lastname = document.createElement('td');
  lastname.innerText = data.lastname;
  tr.appendChild(lastname);
  const hobbies = document.createElement('td');
  hobbies.innerText = data.hobbies;
  tr.appendChild(hobbies);
  const actions = document.createElement('td');
  const editButton = document.createElement('button');
  editButton.innerText = 'edit';
  actions.appendChild(editButton);
  const deleteButton = document.createElement('button');
  deleteButton.innerText = 'delete';
  tr.appendChild(actions);
  actions.appendChild(deleteButton);

  document.querySelector('tbody').appendChild(tr);
}
