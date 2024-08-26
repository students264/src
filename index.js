const express=require("express");
const {createServer}=require("http");
const path=require("path");
const app=express();
const port=9001;
const server=createServer(app);
const {Server}=require("socket.io");
const io=new Server(server);
  io.on('connection', (socket) => {
    socket.on('chat name',(ms)=>{
      io.emit('chat name',ms);
    });
    socket.on('chat message', (msg) => {
      io.emit('chat message', msg);
    });
  });
  app.use(express.static(path.resolve("./html")));
  app.get('/', (req, res) => {
    res.sendFile("/html/index.html");
  });
server.listen(port,()=>console.log(`server started on port ${port}`));