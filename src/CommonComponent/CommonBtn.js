import React, { useRef, useEffect, useState } from "react";

function CommonBtn({ value, text, onClick }) {
  return (
    <>
      <button className="btn" onClick={onClick}>
        {text}
      </button>
    </>
  );
}
export default CommonBtn;
