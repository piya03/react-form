import React, { useState, useEffect } from "react";
import "./App.css";
import CommonInput from "./CommonComponent/CommonInput";
function Form() {
  const [firstName, setFirstName] = useState("");
  console.log("Form -> firstName", firstName);
  return (
    <div className="App">
      <CommonInput
        label="First Name"
        value="priynaka"
        onChangeFun={(e) => setFirstName(e.taget.value)}
      />
      <CommonInput label="Last Name" />
      <CommonInput />
      <CommonInput />
      <CommonInput />
    </div>
  );
}

export default Form;
