import { useState } from "react";

function Counter() {

  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <h2>Counter Component</h2>

      <p>Count: {count}</p>

      <button onClick={handleIncrement}>+</button>

      &nbsp;&nbsp;&nbsp;

      <button onClick={handleDecrement}>-</button>

      <br />
    </div>
  );
}

export default Counter;