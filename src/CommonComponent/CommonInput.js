import React, { useRef, useEffect, useState } from "react";
import "./style.css";

function CommonInput({ value, onChangeFun, onBlurFun, label, error }) {
  const lableRef = useRef(null);
  const inputRef = useRef(null);
  const [val, setVal] = useState("");
  function onfocusFun() {
    lableRef.current.style.top = "-10px";
    lableRef.current.style.left = "12px";
    lableRef.current.style.transition = "all .2s";
  }
  function onBlurFun() {
    if (val) {
      inputRef.current.style.border = "1px solid black";
      return;
    }
    if (!val) {
      error = true;
      inputRef.current.style.border = "1px solid red";
      lableRef.current.style.color = "red";
    }
    lableRef.current.style.top = "15px";
    lableRef.current.style.left = "15px";
    lableRef.current.style.transition = "all .2s";
  }

  function onChangeFun(e) {
    lableRef.current.style.color = "black";
    setVal(e.target.value);
  }
  useEffect(() => {
    inputRef.current.click();
  });

  return (
    <div>
      <div className="inputBox">
        <label
          onClick={(e) => {
            inputRef.current.focus();
          }}
          htmlFor=""
          className="inputLable"
          ref={lableRef}
        >
          {label}
        </label>
        <input
          ref={inputRef}
          className="input"
          type="text"
          value={val}
          onChange={onChangeFun}
          onFocus={onfocusFun}
          onBlur={onBlurFun}
        />
      </div>
      {error && (
        <p
          style={{
            color: "red",
          }}
        >
          Required
        </p>
      )}
    </div>
  );
}

export default CommonInput;
