require("dotenv").config();
const express = require('express')
const app = require('express')();
const server = require('http').createServer(app);
const path = require('path');

app.use(express.static(path.join(__dirname, '/client/build')));

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '/client/build', 'index.html'));
});

const io = require('socket.io')(server)
io.on('connection', socket => {
  console.log("new connection");
  socket.on('join', message => {
    socket.broadcast.emit('chat-join', message)
  })
  socket.on('disconnect', () => {
    console.log('user left')
  })
});


const port = process.env.PORT || 3001;
server.listen(port, process.env.IP, function(){

	console.log("Photography has started" + port);
})