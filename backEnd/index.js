const { Socket } = require("dgram");
const express = require("express");
const http = require("http");
const app = express()
const socketIO = require('socket.io');

const server = http.createServer(app)

const PORT = process.env.PORT || 4000;

const io = socketIO(server, {
    cors:{
        origin:"http://localhost:5173",
        methods: ["GET", "POST"]
    }

})

io.on("connection ", ()=>{
    socket.join("some room");
    console.log("Connection is up");

    socket.on("joinroom ", (details) =>{
        const {name, room } = details
        socket.join(room)

        console.log(`user is: ${name} joined the room ${room }`);
    })
})

app.listen(PORT, ()=>{
    console.log("Server is running");
})