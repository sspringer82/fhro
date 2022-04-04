import { getAllUsers as modelGetAllUsers, createNewUser as modelCreateNewUser } from './model.js';

async function getAllUsers(req, res) {
    res.json(await modelGetAllUsers());
}

async function createNewUser(req, res) {
    // validate input
    res.json(await modelCreateNewUser(req.body));
}

export { getAllUsers, createNewUser };