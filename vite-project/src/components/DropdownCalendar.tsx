import { useState } from "react";

const DropdownCalendar = () => {
  //adding in from MakeReservation
  const [minDate, setMinDate] = useState("");
  const [maxDate, setMaxDate] = useState("");

  const roomsAvailable = () => {
    console.log("list of rooms");
  };

  type dateObjectType = {
    year: string;
    month: string;
    day: string;
  };
  const dateFormat: dateObjectType = {
    year: "numeric",
    month: "short",
    day: "numeric",
  };
  const calendarHandler = (e: any) => {
    let display = document.getElementById("dateDisplay").value || {};

    setMaxDate((date) => {
      if (display != " to ") {
        date = new Date(e.target.value).toLocaleDateString("en-us", dateFormat);
      }
      return date;
    });
    setMinDate((date) => {
      if (display == " to ") {
        date = new Date(e.target.value).toLocaleDateString("en-us", dateFormat);
      }
      return date;
    });
  };
  //current
  let now = new Date();
  let theYear = now.getFullYear();
  let theMonth = now.getMonth();
  let theMonthName = now.toLocaleString("default", { month: "long" });
  const daysOfThisMonth = () => {
    let daysArray = [];
    let daysInThisMonth = new Date(theYear, theMonth + 1, 0).getDate();
    for (let i = 1; i < daysInThisMonth + 1; i++) {
      daysArray.push(i);
    }
    return daysArray;
  };
  let daysOfCurrentMonth = daysOfThisMonth();
  const [day, setDay] = useState(daysOfCurrentMonth);
  //   const [date, setDate] = useState();
  const years: any[] = [];
  const yearsSelection = () => {
    let currentYear = new Date().getFullYear();
    for (let i = 0; i < 5; i++) {
      years.push(currentYear + i);
    }
  };
  yearsSelection();
  const year = {
    January: 31,
    February: 28,
    March: 31,
    April: 30,
    May: 31,
    June: 30,
    July: 31,
    August: 31,
    September: 30,
    October: 31,
    November: 30,
    December: 31,
  };
  const months = Object.keys(year);
  const dateArray = [];
  const calendarFunc = () => {
    for (let i = 1; i < dateArray.length + 1; i++) {
      dateArray.push(i);
    }
  };
  calendarFunc();

  let days = [];
  const dayHandler = () => {
    let currentYear = document.getElementById("years").value;
    currentYear = +currentYear;
    let currentMonth = document.getElementById("months").value;
    let monthLength = year[currentMonth];
    if (currentYear % 4 == 0 && currentMonth == "February") {
      monthLength = 29;
    }
    for (let i = 1; i < monthLength + 1; i++) {
      days.push(i);
    }
    setDay(days);
  };

  return (
    <div className="dropdown">
      MakeReservation
      <input
        id="dateDisplay"
        type="text"
        className="calendar-display"
        value={minDate + " to " + maxDate}
        //new Date().toLocaleDateString('en-us', { weekday:"long", year:"numeric", month:"short", day:"numeric"})
        disabled
      />
      <input
        id="dateSelection"
        className="calendarStyle"
        type="date"
        min={new Date()}
        pattern="mm-dd-yyyy"
        onChange={calendarHandler}
      />
      <button className="btn-date-submit" onClick={roomsAvailable}>
        Submit
      </button>
      <button className="dropbtn">Dropdown</button>
      <div className="dropdown-content">
        <div className="dropdown-calendar">
          <select
            id="years"
            name="years"
            onChange={dayHandler}
            autoComplete="off"
          >
            {years.map((year) =>
              year == theYear ? (
                <option value={year} selected>
                  {year}
                </option>
              ) : (
                <option value={year}>{year}</option>
              )
            )}
          </select>
          <select
            id="months"
            name="months"
            onChange={dayHandler}
            autoComplete="off"
          >
            {months.map(
              (month) =>
                theMonthName == month ? (
                  <option value={month} selected>
                    {month}
                  </option>
                ) : (
                  <option value={month}>{month}</option>
                )
              // (<option value={month}>{month}</option>)
            )}
          </select>
          <div className="days-organization">
            {day.map((x) => (
              <span className="day">{x}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DropdownCalendar;
