import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  function incrementOne() {
    setCount(count + 1);
  }

  function decrementOne() {
    setCount(count - 1);
  }

  function resetValue() {
    setCount(0);
  }

  return (
    <div className="body-component">
      <div>
        Contador em: <span>{count}</span>
      </div>
      <div className="line"></div>
      <div className="increment-decrement-container">
        <button onClick={decrementOne}>Subtrair</button>
        <button onClick={incrementOne}>Somar</button>
      </div>
      <div className="reset-container">
        <button onClick={resetValue}>Resetar</button>
      </div>
      <footer>Use apenas se precisar de ajuda</footer>
    </div>
  );
}

export default Counter;
