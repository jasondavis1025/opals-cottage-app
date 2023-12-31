import React, { useEffect, useState } from "react";

const RoomList = () => {
  const [rooms, setRooms] = useState([]);
  // const rooms = [
  //   {
  //     id: 1,
  //     name: "Master Bedroom",
  //     description: "A beatiful bedroom with a King sized bed",
  //   },
  //   {
  //     id: 1,
  //     name: "Ocean View Room",
  //     description: "A beatiful bedroom with a King sized bed",
  //   }
  // ];
  useEffect(() => {
    const roomFetch = async () => {
      const result = await fetch("http://localhost:3001/rooms");
      const data = await result.json();

      setRooms(data);
      // console.log(data);
      // console.log(rooms);
    };
    roomFetch();
  }, []);

  return (
    <div className="center-flex">
      <h1>Available Rooms</h1>
      {rooms.map((room) => (
        <div key={room.id}>
          <h1 className="room-name">{room.name}</h1>
          <p className="room-description">{room.description}</p>
        </div>
      ))}
    </div>
  );
};

export default RoomList;
