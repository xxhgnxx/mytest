"use strict";
var path = require("path");
var express = require("express");
var app = express();
var server = require("http").createServer(app);
console.log(path.resolve("./www"));
var io = require("socket.io").listen(server);
app.use("/", express.static(path.resolve("./www")));
server.listen(80);
io.on("connection", function (socket) {
    console.log(socket.id);
    console.log("a user connected");
    socket.on("disconnect", function () {
        console.log("user disconnected");
    });
});
