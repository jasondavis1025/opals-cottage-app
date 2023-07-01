import express from "express";
import cors from "cors";

import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const app = express();

app.use(cors());

const port = 3001;

// HTTP GET http://localhost:3001/
app.get("/", (req, res) => {
  res.send("Hello World!");
});

// HTTP GET http://localhost:3001/rooms
app.get("/rooms", async (req, res) => {
  const rooms = await prisma.room.findMany();
  res.json(rooms);
});

// HTTP GET http://localhost:3001/room/1
// HTTP GET http://localhost:3001/room/2
// HTTP GET http://localhost:3001/room/3
app.get("/room/:id", (req, res) => {
  res.json(rooms[req.params["id"]]);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
