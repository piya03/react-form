import React, { useState, useEffect } from "react";
import "./App.css";
import CommonInput from "./CommonComponent/CommonInput";
import CommonSelect from "./CommonComponent/CommonSelect";
function Form() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  console.log("Form -> firstName", firstName);
  console.log("Form -> lastName", lastName);

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
      <CommonSelect />
    </div>
  );
}

export default Form;
