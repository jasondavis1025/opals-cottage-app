const express = require('express');

const app = express();

const rooms = [
    {
      id: 1,
      name: "Master Bedroom",
      description: "A beatiful bedroom with a King sized bed",
    },
    {
      id: 1,
      name: "Ocean View Room",
      description: "A beatiful bedroom with a King sized bed",
    }
  ];

app.get('/rooms', (req, res) => {
    res.json(rooms);
})
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));