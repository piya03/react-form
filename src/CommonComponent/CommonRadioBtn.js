import React, { useRef, useEffect, useState } from "react";
import "./style.css";

function CommonRadioBtn() {
  return (
    <React.Fragment>
      <div className="radioBtn">
        <input type="radio" checked="checked" name="radio" />
        <span className="checkmark"></span>
      </div>
    </React.Fragment>
  );
}

export default CommonRadioBtn;
