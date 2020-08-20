import React, { useRef, useEffect, useState } from "react";
import "./style.css";
function CommonSelect({ passOptions }) {
  const [selectVal, setSelectVal] = useState({
    label: "Select Value",
    value: "",
  });
  let options = [
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
    <React.Fragment>
      <div>
        <div className="selectBox">{selectVal.value}</div>
        <div className="bottomOption">
          {options &&
            options.map((each, index) => {
              return (
                <div
                  onClick={(e) => {
                    setSelectVal({
                      label: each.label,
                      value: each.value,
                    });
                    console.log("CommonSelect -> e", e.target.innerHTML);
                  }}
                  key={index}
                >
                  {each.value}
                </div>
              );
            })}
        </div>
      </div>
    </React.Fragment>
  );
}
export default CommonSelect;
