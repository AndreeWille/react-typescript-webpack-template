import React, { useState } from "react";

const App = () => {
  const [count, setCount] = useState<number>(0);

  const increment = () => {
    setCount((count) => count + 1);
  };

  const decrement = () => {
    setCount((count) => count - 1);
  };

  return (
    <div>
      <h2>
        Number: <b>{count}</b>
      </h2>
      <br />
      <br />
      <button
        className="bg-green-300 border rounded border-green-700 p-1"
        onClick={() => increment()}
      >
        Increment
      </button>
      &nbsp;&nbsp;
      <button
        className="bg-red-300 border rounded border-red-700 p-1"
        onClick={() => decrement()}
      >
        Decrement
      </button>
    </div>
  );
};

export default App;
