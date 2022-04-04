const users = [
    {
        id: 1,
        firstname: 'John22',
        lastname: 'Doe',
        email: 'jdoe@example.com'
    }, {
        id: 2,
        firstname: 'Jane',
        lastname: 'Doe',
        email: 'janedoe@example.com'
    }
];

async function getAllUsers() {
    return users;
}

async function createNewUser(user) {
    const id = users.reduce((maxId, user) => Math.max(maxId, user.id), 0) + 1;
    const newUser = { ...user, id }
    users.push(newUser);
    return newUser;
}

export { getAllUsers, createNewUser };