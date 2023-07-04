import { useState, useRef, useEffect } from "react";

const DropdownCalendar = () => {
  const [date, setDate] = useState(" to ");

  //current date information for re-use in calendar
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

  //   initializing years default state with function. considering converting years to regular variable since setState not needed.
  const yearsArray: any[] = [];
  const yearsSelection = () => {
    let currentYear = new Date().getFullYear();
    for (let i = 0; i < 5; i++) {
      yearsArray.push(currentYear + i);
    }
  };
  yearsSelection();
  const [years, setYears] = useState(yearsArray);

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
  const monthsOfYear = Object.keys(year);
  const initMonthsArray = monthsOfYear.slice(theMonth, monthsOfYear.length);
  const [months, setMonths] = useState(initMonthsArray);
  const [currentYearSelected, setCurrentYearSelected] = useState(true);

  //handler functions and regular other functions below:

  const roomsAvailable = () => {
    console.log("list of rooms");
  };

  const dateArray = [];
  const calendarFunc = () => {
    for (let i = 1; i < dateArray.length + 1; i++) {
      dateArray.push(i);
    }
  };
  calendarFunc();

  let days: any[] = [];
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
    setMonths((months) => {
      if (currentYear == new Date().getFullYear()) {
        return (months = initMonthsArray);
      } else {
        return (months = monthsOfYear);
      }
    });
    setCurrentYearSelected((cySelected): boolean => {
      if (currentYear == theYear) {
        return (cySelected = true);
      } else {
        return (cySelected = false);
      }
    });
  };

  const calendarRevealHandler = () => {
    setCalendarView((current) => (current = !current));
  };
  let todaysDate: any = new Date();
  let todaysDay: any = new Date().getDate();
  // let startDate;
  // let endDate;
  // const [selectedElement, setSelectedElement] = useState(false);

  const daySendHandler = (event: any) => {
    // event.target.className += "selected-Highlight";
    let dayInp = +event.target.innerText;
    let monthInp: any = document.getElementById("months").value;
    let yearInp = document.getElementById("years").value;
    let value = `${monthsNumbers[monthInp]}-${
      String(dayInp).length < 2 ? "0" + dayInp : String(dayInp)
    }-${yearInp}`;
    // console.log(dayInp, monthInp, yearInp);
    // console.log(value);
    // event.target.classList.add("selected-Highlight");

    setDate((date): string => {
      if (date == " to ") {
        return (date = value + " to ");
      }
      if (
        date.length == (value + " to ").length &&
        Date.parse(value) > Date.parse(date.slice(0, date.length - 3))
      ) {
        console.log(2);
        return (date = date + value);
      } else {
        console.log(3);
        return (date = value + " to ");
      }
      // if (date.length == (value + " to " + value).length) {
      //   return (date = value + " to ");
      // }
      // return date;
    });
  };
  // const [hightlight, setHighlight] = useState([]);
  // const dayHighlightingHandler = (event) => {
  //   setHighlight[]

  // };
  useEffect(() => {
    let firstId: any = +date.slice(3, 5);
    let SecondId: any = +date.slice(17, 19);
    console.log(firstId, SecondId);
    if (typeof firstId == "number") {
      for (let i = 1; i < 32; i++) {
        document
          .getElementById("day" + i)
          .classList.remove("selected-Highlight");
      }
    }
    if (date != " to ") {
      if (typeof firstId == "number" && typeof SecondId == "number") {
        for (let i = firstId; i < SecondId + 1; i++) {
          document
            .getElementById("day" + i)
            .classList.add("selected-Highlight");
        }
      }
    }
    if (date != " to ") {
      let singleSelect = document.getElementById("day" + firstId);
      // console.log(document.getElementById("day" + firstId));
      if (singleSelect.classList) {
        singleSelect.classList.add("selected-Highlight");
      }
    }
  }, [date]);
  return (
    <div className="make-Reservation">
      MakeReservation
      <div>
        <i className="fa fa-calendar" aria-hidden="true"></i>
        <div onClick={calendarRevealHandler}>
          <input
            id="dateDisplay"
            type="text"
            className="calendar-display"
            value={date}
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
              {months.map((month) =>
                theMonthName == month ? (
                  <option value={month} selected>
                    {month}
                  </option>
                ) : (
                  <option value={month}>{month}</option>
                )
              )}
            </select>
            <div className="days-organization">
              {day.map((dy) => (
                <span
                  className={
                    `day ${
                      dy < todaysDay && currentYearSelected
                        ? "disabledDay "
                        : " "
                    }`
                    //  {
                    //   dy >= todaysDay && currentYearSelected && selectedElement && date
                    //     ? "selected-Highlight"
                    //     : ""
                    // }
                  }
                  id={"day" + String(dy)}
                  onClick={
                    dy < todaysDay && currentYearSelected
                      ? undefined
                      : daySendHandler
                  }
                >
                  {dy}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
      <button className="btn-date-submit" onClick={roomsAvailable}>
        Search
      </button>
    </div>
  );
};

export default DropdownCalendar;
