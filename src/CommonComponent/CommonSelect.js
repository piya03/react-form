import React, { useRef, useEffect, useState } from "react";
import "./style.css";
function CommonSelect({ passOptions }) {
  const [selectVal, setSelectVal] = useState({
    label: "Select Value",
    value: "",
  });
  const [showOptions, setShowOptions] = useState(false);
  console.log("CommonSelect -> showOptions", showOptions);
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
        <div onClick={() => setShowOptions(true)} className="selectBox">
          {selectVal.label}
        </div>
        {showOptions && (
          <div className="bottomOption">
            {options &&
              options.map((each, index) => {
                return (
                  <div
                    onClick={(e) => {
                      setSelectVal({
                        ...selectVal,
                        label: each.label,
                        value: each.value,
                      });
                      setShowOptions(false);
                      console.log("CommonSelect -> e", e.target.innerHTML);
                    }}
                    key={index}
                  >
                    {each.value}
                  </div>
                );
              })}
          </div>
        )}
      </div>
    </React.Fragment>
  );
}
export default CommonSelect;
