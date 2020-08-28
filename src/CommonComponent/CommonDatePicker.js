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
  let option = [];
  for (let i = baseYear; i <= currentYear; i++) {
    option.push({
      label: i,
      value: i,
    });
  }
  return option.reverse();
};

function CommonDatePicker() {
  const [month, setMonth] = useState({ label: "Month", value: "" });
  const [year, setYear] = useState({ label: "Year", value: "" });
  return (
    <div>
      <CommonSelect
        selectVal={month}
        setSelectVal={(e) => {
          setMonth(e);
        }}
        options={monthOptions()}
        styleContainer={{
          width: "100px",
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
