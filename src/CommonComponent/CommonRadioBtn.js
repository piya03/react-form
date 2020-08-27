import React, { useRef, useEffect, useState } from "react";
import "./style.css";

function CommonRadioBtn({ name, value, onChange, checked }) {
  return (
    <>
      <div className="radioBtn">
        <span className="checkmark"></span>
        <input
          type="radio"
          value={value}
          checked={checked}
          name={name}
          onChange={onChange}
        />
        {checked && <span className="checked"></span>}
      </div>
    </>
  );
}

export default CommonRadioBtn;
