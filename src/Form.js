import React, { useState, useEffect } from "react";
import "./App.css";
import CommonInput from "./CommonComponent/CommonInput";
import CommonSelect from "./CommonComponent/CommonSelect";
import CommonRadioBtn from "./CommonComponent/CommonRadioBtn";
import CommonDatePicker from "./CommonComponent/CommonDatePicker";
import CommonBtn from "./CommonComponent/CommonBtn";

//Object.keys(object1)
function bulkSetLocalStorage(obj) {
  Object.keys(obj).map((each) => {
    localStorage.setItem(
      each,
      typeof obj[each] === "object" ? JSON.stringify(obj[each]) : obj[each]
    );
  });
}
// function setLocalStorage(key, value) {
//   localStorage.setItem(key, value);
// }

function bulkGetLocalStorage(arr) {
  // debugger;
  if (!Array.isArray(arr)) {
    return localStorage.getItem(arr);
  }

  const n = arr.reduce((acc, each) => {
    const v = localStorage.getItem(each);

    acc[each] = v;
    return acc;
  }, {});

  return n;
}

// function bulkGetLocalStorage(obj) {
//   JSON.parse(localStorage.getItem(obj));
//   // JSON.parse(getFromLocalStorage("setSelectOption")) || {
// }

function getFromLocalStorage(key) {
  return localStorage.getItem(key);
}
function Form() {
  const [firstName, setFirstName] = useState(
    bulkGetLocalStorage("setFirstName") || ""
  );
  const [lastName, setLastName] = useState(
    bulkGetLocalStorage("setLastName") || ""
  );
  const [selectedOption, setSelectedOption] = useState(
    JSON.parse(bulkGetLocalStorage("setSelectOption")) || {
      label: "Select Value",
      value: "",
    }
  );

  const [radioVal, setRadioVal] = useState(
    bulkGetLocalStorage("setRadioVal") || ""
  );
  const [month, setMonth] = useState(
    JSON.parse(bulkGetLocalStorage("setMonth")) || { label: "Month", value: "" }
  );

  const [year, setYear] = useState(
    JSON.parse(bulkGetLocalStorage("setYear")) || {
      label: "2020",
      value: "2020",
    }
  );

  const [days, setDays] = useState(
    JSON.parse(bulkGetLocalStorage("setDays")) || { label: "Day", value: "" }
  );

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
  let allObj = {
    setFirstName: firstName,
    setLastName: lastName,
    setRadioVal: radioVal,
    setMonth: month,
    setYear: year,
    setDays: days,
    setSelectOption: selectedOption,
  };

  //  {
  //   setFirstName: value
  //  }
  function submitForm() {
    bulkSetLocalStorage(allObj);
    console.log(
      bulkGetLocalStorage([
        "setFirstName",
        "setLastName",
        "setRadioVal",
        "setMonth",
        "setYear",
        "setDays",
        "setSelectOption",
      ]),
      "how to get items"
    );
  }

  console.log(
    bulkGetLocalStorage([
      "setFirstName",
      "setLastName",
      "setRadioVal",
      "setMonth",
      "setYear",
      "setDays",
      "setSelectOption",
    ])
  );
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
          console.log("Form -> e", e);

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
