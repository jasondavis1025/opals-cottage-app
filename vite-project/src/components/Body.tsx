import { useState } from "react";

import RoomList from "./RoomList";
import DropdownCalendar from "./DropdownCalendar";

const Body = () => {
  const [reservation, setReservation] = useState(false);

  const clickHandler = () => {
    console.log("show rooms!");
    setReservation((rooms): any => {
      // if (dateSelected) {}
      return !rooms;
    });
  };
  return (
    <div className="bodyStyling">
      {/* {reservation && <MakeReservation />} */}
      <DropdownCalendar onClick={clickHandler} />
      {reservation && <RoomList />}
    </div>
  );
};

export default Body;
