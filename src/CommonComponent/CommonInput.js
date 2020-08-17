import React, { useRef, useEffect } from "react";
import "./style.css";

function CommonInput({ value, onChange, label }) {
  const lableRef = useRef(null);
  const inputRef = useRef(null);
  useEffect(() => {
    //inputRef.current.style.backgroundColor = "red";
    console.log("CommonInput -> inputRef", inputRef);
  });
  //inputRef.current.backgroundColor = "red";
  return (
    <div>
      <div className="inputBox">
        <label htmlFor="" className="inputLable" ref={lableRef}>
          {label}
        </label>
        <input
          ref={inputRef}
          className="input"
          type="text"
          value={value}
          onChange={onChange}
        />
      </div>
    </div>
  );
}

export default CommonInput;
