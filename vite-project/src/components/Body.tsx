// import { useState } from "react";

// import MakeReservation from "./MakeReservation";
import RoomList from "./RoomList";
import DropdownCalendar from "./DropdownCalendar";

const Body = () => {
  // const [reservation, setReservation] = useState(true);

  return (
    <div className="bodyStyling">
      <RoomList />
      {/* {reservation && <MakeReservation />} */}
      <DropdownCalendar />
    </div>
  );
};

export default Body;
