import express from "express";

//ESTE FROMA NO ES IDEAL // const { Server } = require("socket.io");
//La correcta en la siguiente linea
import { Server } from "socket.io";
const io = new Server(server)


const app = express();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(3000, () => {
  console.log("Example app listening on port 3000!");
});
