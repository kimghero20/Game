const express = require("express");
const http = require("http");
const socketIO = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = socketIO(server);

io.on("connection", (socket) => {
  console.log("Bir oyuncu bağlandı");

  socket.on("disconnect", () => {
    console.log("Oyuncu ayrıldı");
  });
});

const port = process.env.PORT || 3000;
server.listen(port, () => {
  console.log(`Sunucu ${port} portunda çalışıyor`);
});