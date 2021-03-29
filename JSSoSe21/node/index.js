const User = require('./user');
const peter = require('./peter');

const klaus = new User('Klaus', 'Müller');

console.log(klaus.getFullname());
console.log(peter);
