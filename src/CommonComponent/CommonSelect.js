import React, { useRef, useEffect, useState } from "react";
import "./style.css";
import { useClickOutside } from "../Hooks/useClickOutside";

function CommonSelect({ options, selectVal, setSelectVal, styleContainer }) {
  const { visible, setVisible, ref } = useClickOutside(false);

  return (
    <React.Fragment>
      <div
        style={{
          position: "relative",
          ...styleContainer,
        }}
      >
        <div onClick={() => setVisible(true)} className="selectBox">
          {selectVal.label}
        </div>
        {visible && (
          <div className="bottomOption" ref={ref}>
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
                        setVisible(false);
                      }}
                      key={index}
                    >
                      {each.value}
                    </div>
                    {selectVal.value === each.value && (
                      <span style={{ color: "teal", fontSize: "13px" }}>
                        <i className="fa fa-check"></i>
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
