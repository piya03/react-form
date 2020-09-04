import React, { useState, useEffect } from "react";
import "./App.css";
import CommonInput from "./CommonComponent/CommonInput";
import CommonSelect from "./CommonComponent/CommonSelect";
import CommonRadioBtn from "./CommonComponent/CommonRadioBtn";
import CommonDatePicker from "./CommonComponent/CommonDatePicker";
import CommonBtn from "./CommonComponent/CommonBtn";

function setLocalStorage(key, value) {
  localStorage.setItem(key, value);
}

function bulkSetLocalStorage(obj, value) {
  localStorage.setItem(obj, JSON.stringify(value));
  //localStorage.setItem("setDays", JSON.stringify(days));
}
function bulkGetLocalStorage(obj) {
  JSON.parse(localStorage.getItem(obj));
  // JSON.parse(getFromLocalStorage("setSelectOption")) || {
}

function getFromLocalStorage(key) {
  return localStorage.getItem(key);
}
function Form() {
  const [firstName, setFirstName] = useState(
    getFromLocalStorage("setFirstName") || ""
  );
  const [lastName, setLastName] = useState(
    getFromLocalStorage("setLastName") || ""
  );
  const [selectedOption, setSelectedOption] = useState(
    bulkGetLocalStorage("setSelectOption")
  ) || {
    label: "Select Value",
    value: "",
  };

  const [radioVal, setRadioVal] = useState(
    getFromLocalStorage("setRadioVal") || ""
  );
  const [month, setMonth] = useState(bulkGetLocalStorage("setMonth")) || {
      label: "Select Value",
      value: "",
    } || { label: "Month", value: "" };

  const [year, setYear] = useState(bulkGetLocalStorage("setYear")) || {
      label: "Select Value",
      value: "",
    } || { label: "Year", value: "" };

  const [days, setDays] = useState(bulkGetLocalStorage("setDays")) || {
      label: "Select Value",
      value: "",
    } || { label: "Day", value: "" };

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

  function submitForm() {
    // {
    //   setFirstName: firstName,

    // }
    setLocalStorage("setFirstName", firstName);
    setLocalStorage("setLastName", lastName);
    setLocalStorage("setRadioVal", radioVal);
    bulkSetLocalStorage("setMonth", month);
    bulkSetLocalStorage("setYear", year);
    bulkSetLocalStorage("setDays", days);
    bulkSetLocalStorage("setSelectOption", selectedOption);
  }
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
        <CommonBtn
          text="Submit"
          onClick={() => {
            submitForm();
            console.log("why");
            alert("Form has been submitted");
          }}
        />
      </div>
    </div>
  );
}

export default Form;
