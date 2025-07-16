
const express = require('express');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);

app.use(express.static(__dirname));

io.on('connection', (socket) => {
  console.log('User connected');
  socket.on('join', (data) => console.log('Joined:', data));
});

http.listen(3000, () => {
  console.log('Server started on http://localhost:3000');
});
