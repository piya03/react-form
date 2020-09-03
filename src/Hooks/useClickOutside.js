import React, { useRef, useEffect, useRef, useState } from "react";

export const useClickOutside = function (initialVal = false) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(initialVal);

  function handleClick(e) {
    if (ref.current && !ref.current.contains(e.target)) {
      setVisible(false);
    }
  }

  useEffect(() => {
    document.addEventListener("click", handleClick);
    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, [ref]);

  return { visible, setVisible, ref };
};
