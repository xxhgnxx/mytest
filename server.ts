/// <reference path="typings/index.d.ts" />

import { Player } from "./player";
import { Admin } from "./player";
import * as path from "path";

let express = require("express");
let app = express();
let server = require("http").createServer(app);
console.log(path.resolve("./www"));
let io = require("socket.io").listen(server);
app.use("/", express.static(path.resolve("./www")));
server.listen(80);





io.on("connection", function(socket) {
    console.log(socket.id);
    console.log("a user connected");
    socket.on("disconnect", function() {
        console.log("user disconnected");
    });
});
