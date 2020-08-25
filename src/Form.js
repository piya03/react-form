import React, { useState, useEffect } from "react";
import "./App.css";
import CommonInput from "./CommonComponent/CommonInput";
import CommonSelect from "./CommonComponent/CommonSelect";
import CommonRadioBtn from "./CommonComponent/CommonRadioBtn";
function Form() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [selectedOption, setSelectedOption] = useState({
    label: "Select Value",
    value: "",
  });
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
      <CommonRadioBtn />
    </div>
  );
}

export default Form;
