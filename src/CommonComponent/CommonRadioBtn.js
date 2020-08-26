import React, { useRef, useEffect, useState } from "react";
import "./style.css";

function CommonRadioBtn({ name, value, onChange, checked }) {
  return (
    <React.Fragment>
      <div className="radioBtn">
        <input
          type="radio"
          value={value}
          checked={checked}
          name={name}
          onChange={onChange}
        />
        <span className="checkmark"></span>
      </div>
    </React.Fragment>
  );
}

export default CommonRadioBtn;
