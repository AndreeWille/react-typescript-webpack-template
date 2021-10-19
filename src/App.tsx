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
      <button onClick={() => increment()}>Increment</button>&nbsp;&nbsp;
      <button onClick={() => decrement()}>Decrement</button>
    </div>
  );
};

export default App;
