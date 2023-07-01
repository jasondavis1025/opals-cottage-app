import { useState } from "react";

const DropdownCalendar = () => {
  //adding in from MakeReservation
  const [date, setDate] = useState(" to ");
  //   const [minDate, setMinDate] = useState("");
  //   const [maxDate, setMaxDate] = useState("");

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
  const [calendarView, setCalendarView] = useState(false);

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
  const monthsNumbers = {
    January: "01",
    February: "02",
    March: "03",
    April: "04",
    May: "05",
    June: "06",
    July: "07",
    August: "08",
    September: "09",
    October: "10",
    November: "11",
    December: "12",
  };
  const months = Object.keys(year);
  console.log(months);
  const initMonthsArray = months[theMonth];
  console.log(initMonthsArray);

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
  const calendarRevealHandler = () => {
    setCalendarView((current) => (current = !current));
  };
  let todaysDate: any = new Date();
  let todaysDay: any = new Date().getDate();
  let minDateValue: any = "";
  let maxDateValue: string = "";

  const daySendHandler = (event: any) => {
    console.log(event.target.id);
    let dateInp = document.getElementById("dateSelection");
    let dayInp = +event.target.id;
    let monthInp = document.getElementById("months").value;
    let yearInp = document.getElementById("years").value;
    let value = `${yearInp}-${monthsNumbers[monthInp]}-${
      String(dayInp).length < 2 ? "0" + dayInp : dayInp
    }`;
    // calendarHandler(`${yearInp}-${monthsNumbers[monthInp]}-${dayInp}`);
    // let display = document.getElementById("dateDisplay").value || {};
    // setMaxDate((date) => {
    //   if (Date.parse(value) > Date.parse(minDateValue)) {
    //     date = new Date(value).toLocaleDateString("en-us", dateFormat);
    //     maxDateValue = date;
    //     console.log("max date is " + maxDateValue);
    //   }
    //   return date;
    //     if (minDate != "") {
    //         date = value;
    //     }
    //     if (date != "") {

    //     }
    // });
    // setMinDate((date) => {
    //   if (
    //     minDateValue == new Date() ||
    //     Date.parse(value) < Date.parse(minDateValue)
    //   ) {
    //     date = new Date(value).toLocaleDateString("en-us", dateFormat);
    //     minDateValue = date;
    //     console.log("min date is " + minDateValue);
    //   }
    //   return date;
    //   if (minDate == "") {
    //     date = value;
    //   }
    // });
    console.log(Date.parse(value) > todaysDate);
    setDate((date): string => {
      if (date == " to " && Date.parse(value) > todaysDate) {
        return (date = value + " to ");
      }
      if (date.length == (value + " to ").length) {
        return (date = date + value);
      }
      if (date.length == (value + " to " + value).length) {
        return (date = value + " to ");
      }
      return date;
    });
  };
  const dayTester = (event) => {
    // console.log(event.target);
    let dayInp = +event.target.id;
    let monthInp = document.getElementById("months").value;
    let yearInp = document.getElementById("years").value;
    if (Date(monthInp + "-" + dayInp + "-" + yearInp) > todaysDate) {
      return true;
    }
    return false;
  };
  return (
    <div className="make-Reservation">
      MakeReservation
      <div>
        <div onClick={calendarRevealHandler}>
          <input
            id="dateDisplay"
            type="text"
            className="calendar-display"
            value={date}
            //new Date().toLocaleDateString('en-us', { weekday:"long", year:"numeric", month:"short", day:"numeric"})
            disabled
          />
        </div>
        <div
          className={`${calendarView ? "reveal " : ""}` + `dropdown-content`}
        >
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
              {day.map((dy) => (
                <span
                  className={`day ${dy <= todaysDay ? "disabledDay" : ""}`}
                  id={String(dy)}
                  onClick={daySendHandler}
                >
                  {dy}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* <div className="dropdown" onClick={calendarRevealHandler}>
        <input
          id="dateSelection"
          className=""
          type="date"
          min={new Date()}
          pattern="mm-dd-yyyy"
          onChange={calendarHandler}
          disabled
        />
      </div> */}
      <button className="btn-date-submit" onClick={roomsAvailable}>
        Submit
      </button>
    </div>
  );
};

export default DropdownCalendar;
