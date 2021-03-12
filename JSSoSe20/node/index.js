const User = require('./module');
const User2 = require('./module');

User2.sideEffect();

const klaus = new User();

console.log('Hallo Welt', klaus);
