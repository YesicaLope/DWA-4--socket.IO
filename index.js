import express from "express";

//PASO 3--> CREAR NUESTRO SERVIDOR
const express = require('express')
const app = express();

const http = require('http')
const server = http.createServer(app)

//PASO 2 -> AGREGAR SOCKET.IO
//ESTE FROMA NO ES IDEAL-> const { Server } = require("socket.io");
//La correcta en la siguiente linea
import { Server } from "socket.io";
const io = new Server(server)












app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(3000, () => {
  console.log("Example app listening on port 3000!");
});
