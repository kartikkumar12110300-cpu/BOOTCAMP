import React, { useEffect, useState } from "react";

const UseEffect = () => {
  const [count, setCount] = useState(0);
  const [countTwo, setCountTwo] = useState(0);

  useEffect(() => {
    if (count > 0) {
      alert(`Counter 1 changed to ${count}`);
    }
  }, [count]);

  return (
    <>
      <h2>⚛️ useEffect Demo</h2>

      <div className="counter-section">
        <h3>Count: {count}</h3>
        <button onClick={() => setCount(count + 1)}>
          Increase Count
        </button>
      </div>

      <div className="counter-section">
        <h3>Count Two: {countTwo}</h3>
        <button onClick={() => setCountTwo(countTwo + 1)}>
          Increase Count Two
        </button>
      </div>
    </>
  );
};

export default UseEffect;