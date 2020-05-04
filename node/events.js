const EventEmitter = require('events');
class MessageBus extends EventEmitter {}

var mb = new MessageBus();
mb.on('message', function (data) {
  console.log('Received new message: ' + data);
});
mb.on('message', function (data) {
  console.log('Received new message: ' + data);
});
mb.on('message', function (data) {
  console.log('Received new message: ' + data);
});
mb.emit('message', 'Hello World');
mb.emit('message', 'Hello World');
setTimeout(() => {
  mb.emit('message', 'Hello World');
}, 1000);
