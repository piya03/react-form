import React, { useState, useEffect } from "react";
import "./App.css";
import CommonInput from "./CommonComponent/CommonInput";
import CommonSelect from "./CommonComponent/CommonSelect";
import CommonRadioBtn from "./CommonComponent/CommonRadioBtn";
import CommonDatePicker from "./CommonComponent/CommonDatePicker";
import CommonBtn from "./CommonComponent/CommonBtn";
function Form() {
  const [firstName, setFirstName] = useState("");
  console.log("Form -> firstName", firstName);
  const [lastName, setLastName] = useState("");
  console.log("Form -> lastName", lastName);
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
      <h2 className="details">User Details</h2>
      <CommonInput
        label="First Name"
        value={firstName}
        setValue={setFirstName}
        onChangeFun={(e) => setFirstName(e.target.value)}
      />
      <CommonInput
        label="Last Name"
        value={lastName}
        setValue={setLastName}
        onChangeFun={(e) => setLastName(e.target.value)}
      />
      {/* //////// */}
      <CommonSelect
        selectVal={selectedOption}
        setSelectVal={(e) => {
          setSelectedOption(e);
        }}
        options={daysOptions}
        styleContainer={{
          width: "325px",
        }}
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
        <p style={{ paddingLeft: "20px" }}> toggle</p>
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
        <p style={{ paddingLeft: "20px" }}> another toggle</p>
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
      <div style={{ margin: "30px 0px 10px 0px", textAlign: "center" }}>
        <CommonBtn text="Submit" />
      </div>
    </div>
  );
}

export default Form;
