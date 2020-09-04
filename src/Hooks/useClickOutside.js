import React, { useRef, useEffect, useState } from "react";

export const useClickOutside = function (initialVal = false) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(initialVal);

  function handleClick(e) {
    if (ref.current && !ref.current.contains(e.target)) {
      setVisible(false);
    }
  }
  function handleKeyDown(e) {
    if (e.key === "Escape") {
      setVisible(false);
    }
  }

  useEffect(() => {
    document.addEventListener("click", handleClick, true);
    document.addEventListener("keydown", handleKeyDown, true);
    return () => {
      document.removeEventListener("click", handleClick, true);
      document.removeEventListener("keydowm", handleKeyDown, true);
    };
  }, [ref]);

  return { visible, setVisible, ref };
};
