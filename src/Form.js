import React from "react";
import "./App.css";
import CommonInput from "./CommonComponent/CommonInput";
function Form() {
  return (
    <div className="App">
      <CommonInput label="First Name" />
      <CommonInput label="Last Name" />
      <CommonInput />
      <CommonInput />
      <CommonInput />
    </div>
  );
}

export default Form;
