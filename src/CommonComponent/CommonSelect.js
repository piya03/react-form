import React, { useRef, useEffect, useState } from "react";
import "./style.css";
function CommonSelect({ options, selectVal, setSelectVal, styleContainer }) {
  console.log("CommonSelect -> selectVal", selectVal);
  const [showOptions, setShowOptions] = useState(false);
  const [showCheck, setShowCheck] = useState(false);
  return (
    <React.Fragment>
      <div
        style={{
          position: "relative",
          ...styleContainer,
        }}
      >
        <div onClick={() => setShowOptions(true)} className="selectBox">
          {selectVal.label}
        </div>
        {showOptions && (
          <div className="bottomOption">
            {options &&
              options.map((each, index) => {
                return (
                  <div key={index}>
                    <div
                      onClick={(e) => {
                        setSelectVal({
                          ...selectVal,
                          label: each.label,
                          value: each.value,
                        });
                        setShowOptions(false);
                      }}
                      key={index}
                    >
                      {each.value}
                    </div>
                    {selectVal.value === each.value && (
                      <span style={{ color: "teal", fontSize: "13px" }}>
                        <i class="fa fa-check"></i>
                      </span>
                    )}
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
