import React, { useEffect, useState } from "react";

const WindowResize = () => {
  const [widthCount, setWidthCount] = useState(window.innerWidth);

  const updateWidth = () => {
    setWidthCount(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", updateWidth);

    return () => {
      window.removeEventListener("resize", updateWidth);
    };
  }, []);

  return (
    <>
      <h2> Window Resize Tracker</h2>

      <div className="resize-box">
        <p>Current Window Width</p>
        <h1>{widthCount}px</h1>
      </div>
    </>
  );
};

export default WindowResize;