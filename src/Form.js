import React, { useState, useEffect } from "react";
import "./App.css";
import CommonInput from "./CommonComponent/CommonInput";
import CommonSelect from "./CommonComponent/CommonSelect";
import CommonRadioBtn from "./CommonComponent/CommonRadioBtn";
import CommonDatePicker from "./CommonComponent/CommonDatePicker";

function Form() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [selectedOption, setSelectedOption] = useState({
    label: "Select Value",
    value: "",
  });
  const [radioVal, setRadioVal] = useState("");
  const [month, setMonth] = useState({ label: "Month", value: "" });
  const [year, setYear] = useState({ label: "Year", value: "" });
  const [days, setDays] = useState({ label: "Day", value: "" });
  let daysOptions = [
    {
      label: "one",
      value: "one",
    },
    {
      label: "Two",
      value: "Two",
    },
    {
      label: "Three",
      value: "Three",
    },
    {
      label: "Four",
      value: "Four",
    },
    {
      label: "Five",
      value: "Five",
    },
  ];
  return (
    <div className="">
      <CommonInput
        label="First Name"
        value={firstName}
        onChangeFun={(e) => setFirstName(e.target.value)}
      />
      <CommonInput
        label="Last Name"
        value={lastName}
        onChangeFun={(e) => setLastName(e.target.value)}
      />
      {/* //////// */}
      <CommonSelect
        selectVal={selectedOption}
        setSelectVal={(e) => {
          console.log("Form -> e who i am", e);
          setSelectedOption(e);
        }}
        options={daysOptions}
      />

      {/* ////// */}
      <div style={{ display: "flex", alignItems: "center" }}>
        <CommonRadioBtn
          checked={radioVal === "firstVal" ? true : false}
          name="test"
          value="firstVal"
          onChange={(e) => {
            console.log("Form -> e first one", e);
            setRadioVal(e.target.value);
          }}
        />
        <p style={{ paddingLeft: "35px" }}> toggle</p>
      </div>
      <div style={{ display: "flex", alignItems: "center" }}>
        <CommonRadioBtn
          checked={radioVal === "seconVal" ? true : false}
          name="test"
          value="seconVal"
          onChange={(e) => {
            console.log("Form -> e second", e);

            setRadioVal(e.target.value);
          }}
        />
        <p style={{ paddingLeft: "35px" }}> another toggle</p>
      </div>

      {/* ///////////// */}

      <CommonDatePicker
        month={month}
        setMonth={setMonth}
        year={year}
        setYear={setYear}
        days={days}
        setDays={setDays}
      />
    </div>
  );
}

export default Form;
