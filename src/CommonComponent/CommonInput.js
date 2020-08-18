import React, { useRef, useEffect, useState } from "react";
import "./style.css";

function CommonInput({ value, onChangeFun, onBlurFun, label }) {
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
      return;
    }
    lableRef.current.style.top = "15px";
    lableRef.current.style.left = "15px";
    lableRef.current.style.transition = "all .2s";
  }

  function onChangeFun(e) {
    setVal(e.target.value);
  }

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
          value={val}
          onChange={onChangeFun}
          onFocus={onfocusFun}
          onBlur={onBlurFun}
        />
      </div>
    </div>
  );
}

export default CommonInput;
