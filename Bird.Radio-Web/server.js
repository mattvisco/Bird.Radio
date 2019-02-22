const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
var server = require('http').createServer(app);
var io = require('socket.io')(server);

io.on('connection', function(socket){
  console.log('a user connected');
  socket.emit('hi', 'ooogum');
});

// console.log that your server is up and running
server.listen(port, () => console.log(`Listening on port ${port}`));

// create a GET route
app.get('/testeroo', (req, res) => {
  console.log('got it')
  res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' });
});

// var HOST = '127.0.0.1';
// var PORT = 33333;
//
// var dgram = require('dgram');
// var serverUDP = dgram.createSocket('udp4');
//
// serverUDP.bind(PORT, HOST);
//
// serverUDP.on('listening', function () {
//     var address = serverUDP.address();
//     console.log('UDP Server listening on ' + address.address + ":" + address.port);
// });
//
// serverUDP.on('message', function (message, remote) {
//     console.log(remote.address + ':' + remote.port +' - ' + message);
//
// });
