import React, { useRef, useEffect, useState } from "react";
import "./style.css";
function CommonSelect({ options, selectVal, setSelectVal, styleContainer }) {
  const [showOptions, setShowOptions] = useState(false);
  return (
    <React.Fragment>
      <div style={styleContainer}>
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
