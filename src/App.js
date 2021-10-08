import React, { useState } from "react";

function App() {
  const randomNumber1 = Math.ceil(Math.random() * 10);
  const randomNumber2 = Math.ceil(Math.random() * 10);
  
  const [state, setState] = useState({
    num1: randomNumber1,
    num2: randomNumber2,
    response: "",
    score: 0,
    onScreen: "",
  });

  function inputKeyPress(event) {
    if (event.key === "Enter") {
      const answer = parseInt(state.response);
      if (state.num1 + state.num2 === answer) {
        setState({
          num1: randomNumber1,
          num2: randomNumber2,
          score: state.score + 1,
          response: "",
          onScreen: "Correct!",
        });
      } else {
        setState({
          ...state,
          score: state.score - 1,
          response: "",
          onScreen: "Wrong!",
        });
      }
    }
  }

  function updateResponse(event) {
    setState({
      ...state,
      response: event.target.value,
    });
  }

  return (
    <>
      <div>{state.onScreen}</div>
      <div>
        {state.num1}+{state.num2}
      </div>
      <input
        onKeyPress={inputKeyPress}
        onChange={updateResponse}
        value={state.response}
      />
      <div>Score: {state.score}</div>
    </>
  );
}

export default App;
