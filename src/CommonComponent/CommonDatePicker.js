import React, { useRef, useEffect, useState } from "react";
import "./style.css";
import CommonSelect from "./CommonSelect";
import moment from "moment";

let months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

let monthOptions = function () {
  let options = [];
  months.map((each, index) => {
    return options.push({
      label: each,
      value: each,
    });
  });
  return options;
};

let yearOptions = function () {
  let baseYear = 1950;
  let currentYear = moment().format("YYYY");
  let options = [];
  for (let i = baseYear; i <= currentYear; i++) {
    options.push({
      label: i,
      value: i,
    });
  }
  return options.reverse();
};
//moment().format('MM'); //08
// moment().format('DD'); //28
//moment().month("July").format("M"); // 7
//moment("2012-02", "YYYY-MM").daysInMonth() // 29
//moment("2012-01", "YYYY-MM").daysInMonth() // 31
let dateOptions = function (passyear, passmonth) {
  console.log("dateOptions -> passmonth", passmonth);
  console.log("dateOptions -> passyear", passyear);
  let options = [];
  let getdaysInMonth = moment(
    `${passyear}-${passmonth}`,
    "YYYY-MMMMM"
  ).daysInMonth();
  for (let i = 1; i <= getdaysInMonth; i++) {
    options.push({
      label: i,
      value: i,
    });
  }
  return options;
};

function CommonDatePicker({
  styleContainer,
  month,
  setMonth,
  year,
  setYear,
  days,
  setDays,
}) {
  return (
    <div className="datePickerBox" style={styleContainer}>
      <CommonSelect
        selectVal={days}
        setSelectVal={(e) => {
          setDays(e);
        }}
        options={dateOptions(year.value, month.value)}
        styleContainer={{
          width: "100px",
        }}
      />

      <CommonSelect
        selectVal={month}
        setSelectVal={(e) => {
          setMonth(e);
        }}
        options={monthOptions()}
        styleContainer={{
          width: "120px",
        }}
      />
      <CommonSelect
        selectVal={year}
        setSelectVal={(e) => {
          setYear(e);
        }}
        options={yearOptions()}
        styleContainer={{
          width: "100px",
        }}
      />
    </div>
  );
}

export default CommonDatePicker;
